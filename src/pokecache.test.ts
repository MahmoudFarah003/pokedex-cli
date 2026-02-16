import { describe, test, expect } from "vitest";
import { Cache } from "./pokecache.js";

describe("PokeCache", () => {
  test("set and get cache", () => {
    const cache = new Cache(500);

    cache.add("pikachu", { id: 25 });

    expect(cache.get("pikachu")).toEqual({ id: 25 });

    cache.stopReapLoop();
  });

  test("has method works", () => {
    const cache = new Cache(500);

    cache.add("bulbasaur", { id: 1 });

    expect(cache.get("bulbasaur")).not.toBeUndefined();
    expect(cache.get("charmander")).toBeUndefined();

    cache.stopReapLoop();
  });
});

