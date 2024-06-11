import { expect, it } from "vitest";
import { addition } from "../src/addition";

it("should add positiv integers correctly", () => {
  const actual = addition(2, 3);
  expect(actual).toBe(5);
});
