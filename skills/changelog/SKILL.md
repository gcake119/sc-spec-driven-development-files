---
name: changelog
description: Maintains root CHANGELOG.md using git commit history in Airbnb-style dated sections. Use when the user invokes /changelog, asks to update or generate changelog entries, or before merging a branch. If no changelog exists, create one from all commits grouped by date and section. If it exists, prepend only new entries by date.
---

# Changelog Skill

## Purpose

Keep a single `CHANGELOG.md` at project root in this format:

- Top title: `# Changelog`
- Date sections: `## YYYY-MM-DD` (newest first)
- Airbnb-style category headings under each date:
  - `### Added`
  - `### Changed`
  - `### Fixed`
  - `### Docs`
  - `### Chore`
- Commit bullets under each category (`- <commit subject>`)

## When To Use

- User says: "update changelog", "generate changelog", "before merge add changelog"
- Manual pre-merge checkpoint for active branch work

## Workflow

1. Run the script from the project root:

```bash
python3 <skill-dir>/scripts/changelog.py
```

Where `<skill-dir>` is the directory containing this skill. Claude Code exposes the skill path — use it directly.

2. The script handles both cases automatically:
   - **No `CHANGELOG.md`**: read full `git log`, create date headings, add commit bullets per date
   - **`CHANGELOG.md` exists**: detect newest `## YYYY-MM-DD`, fetch newer commits only, prepend new date sections

3. Review the output, edit bullet wording if needed, then commit `CHANGELOG.md` as part of the merge commit.

## Format

```markdown
# Changelog

## 2026-03-31

### Added
- Add responsive design to layout and CSS

### Changed
- Refine homepage spacing across breakpoints

### Docs
- Update testing and responsive requirements in specs

## 2026-03-30

### Added
- Initial project scaffold
```

- One `# Changelog` title at the top
- Date headings as `## YYYY-MM-DD`, newest first
- Use Airbnb-style grouped sections per date
- Each commit is one bullet; wording may be cleaned up manually after generation

## Pre-Merge Checklist

- Run changelog skill manually before merge
- Confirm new work appears under correct date heading(s)
- Keep newest dates at top
- Commit `CHANGELOG.md` with the merge-related changes

## Notes

- Run from the **project root** (same directory as `.git/`)
- Commit subjects come directly from `git log`; clean them up manually if needed
- The script is idempotent: re-running when nothing is new prints a message and exits without modifying the file
