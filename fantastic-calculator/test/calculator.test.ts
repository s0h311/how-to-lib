import { it, expect } from "vitest";
import { addition } from "../src";

it("should add positive integers correctly", () => {
  const actual = addition(2, 3);
  expect(actual).toBe(5);
});
