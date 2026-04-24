#!/usr/bin/env python3
"""Maintain CHANGELOG.md from git commit history in Airbnb-style sections."""

import subprocess
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path


def git_log(since_date=None):
    """Return commits as {date: [subject, ...]} ordered newest-first."""
    cmd = ["git", "log", "--format=%ad|%s", "--date=short"]
    if since_date:
        cmd.append(f"--after={since_date}")
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    by_date = defaultdict(list)
    for line in result.stdout.strip().splitlines():
        if "|" in line:
            date, subject = line.split("|", 1)
            by_date[date.strip()].append(subject.strip())
    return by_date


def classify_subject(subject):
    """Map commit subject to an Airbnb-style changelog section."""
    lowered = subject.lower()
    if lowered.startswith(("feat:", "add ", "added ", "implement ", "create ", "introduce ")):
        return "Added"
    if lowered.startswith(("fix:", "bugfix", "fix ", "fixed ", "resolve ", "resolved ")):
        return "Fixed"
    if lowered.startswith(("docs:", "doc:", "readme", "documentation", "changelog")):
        return "Docs"
    if lowered.startswith(
        ("chore:", "ci:", "build:", "deps:", "bump ", "upgrade ", "release ", "merge ")
    ):
        return "Chore"
    return "Changed"


def group_by_section(subjects):
    """Return {section: [subject, ...]} in stable section order."""
    section_order = ["Added", "Changed", "Fixed", "Docs", "Chore"]
    grouped = {section: [] for section in section_order}
    for subject in subjects:
        grouped[classify_subject(subject)].append(subject)
    return {section: items for section, items in grouped.items() if items}


def last_date_in_changelog(path):
    """Return the first ## YYYY-MM-DD heading found, or None."""
    for line in path.read_text().splitlines():
        if line.startswith("## "):
            candidate = line[3:].strip()
            try:
                datetime.strptime(candidate, "%Y-%m-%d")
                return candidate
            except ValueError:
                continue
    return None


def render_sections(by_date):
    lines = []
    for date in sorted(by_date, reverse=True):
        lines.append(f"\n## {date}\n")
        grouped = group_by_section(by_date[date])
        for section, subjects in grouped.items():
            lines.append(f"\n### {section}\n")
            for subject in subjects:
                lines.append(f"- {subject}\n")
    return lines


def main():
    changelog = Path("CHANGELOG.md")

    if not changelog.exists():
        by_date = git_log()
        if not by_date:
            print("No commits found — nothing to write.")
            sys.exit(0)
        content = ["# Changelog\n"] + render_sections(by_date)
        changelog.write_text("".join(content))
        total = sum(len(v) for v in by_date.values())
        print(f"Created CHANGELOG.md with {total} entries across {len(by_date)} date(s).")
    else:
        last = last_date_in_changelog(changelog)
        by_date = git_log(since_date=last)
        # --after is exclusive, but drop last date if present to be safe
        by_date.pop(last, None)
        if not by_date:
            print("No new commits since last entry — CHANGELOG.md is up to date.")
            sys.exit(0)
        existing = changelog.read_text()
        lines = existing.splitlines(keepends=True)
        # Insert new sections after the title line
        insert_at = 1 if lines and lines[0].startswith("# ") else 0
        updated = "".join(lines[:insert_at] + render_sections(by_date) + lines[insert_at:])
        changelog.write_text(updated)
        total = sum(len(v) for v in by_date.values())
        print(f"Added {total} new entries to CHANGELOG.md.")


if __name__ == "__main__":
    main()
