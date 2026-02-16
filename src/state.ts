import type { PokemonData } from "./pokeapi.js";
import { Cache } from "./pokecache.js";

export interface State {
  cache: Cache;
  pokedex: Record<string, PokemonData>;
}

export function initState(): State {
  return {
    cache: new Cache(60000),
    pokedex: {},
  };
}

