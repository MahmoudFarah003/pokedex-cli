import { describe, test, expect } from "vitest";
import { cleanInput } from "./src/repl.js";
describe("cleanInput", () => {
  const cases = [
    { input: "  hello  world  ", expected: "hello,world" },
    { input: "Charmander Bulbasaur PIKACHU", expected: "charmander,bulbasaur,pikachu" },
  ];

  cases.forEach(({ input, expected }) => {
    test(`cleanInput("${input}") -> ${expected}`, () => {
      const actual = cleanInput(input);
      expect(actual).toEqual(expected);
    });
  });
});

