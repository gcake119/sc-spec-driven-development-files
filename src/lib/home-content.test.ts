import { describe, expect, it } from "vitest";
import {
  HOME_FOOTER_NOTE,
  HOME_HEADER_SUBTITLE,
  HOME_HEADER_TITLE,
  HOME_MAIN_DESCRIPTION,
} from "./home-content";

describe("home content validation", () => {
  it("defines stable header copy", () => {
    expect(HOME_HEADER_TITLE).toBe("AgentClinic");
    expect(HOME_HEADER_SUBTITLE).toBe("A focused workspace for agent care teams.");
  });

  it("defines a main description covering core domain terms", () => {
    expect(HOME_MAIN_DESCRIPTION).toContain("ailments");
    expect(HOME_MAIN_DESCRIPTION).toContain("therapies");
    expect(HOME_MAIN_DESCRIPTION).toContain("appointments");
  });

  it("defines footer note for phase 1 scaffold", () => {
    expect(HOME_FOOTER_NOTE).toBe("Phase 1 scaffold ready for dashboard and API expansion.");
  });
});
