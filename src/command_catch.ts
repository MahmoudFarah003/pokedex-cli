import type { State } from "./state.js";
import { getPokemon } from "./pokeapi.js";

export async function commandCatch(state: State, name?: string) {
  if (!name) {
    console.log("Please provide a Pokemon name.");
    return;
  }

  console.log(`Throwing a Pokeball at ${name}...`);
  const data = await getPokemon(name);

  const chance = 0.5 * (1 - data.id / 1000); // مثال: كل ما رقم id أكبر، أصعب
  if (Math.random() < chance) {
    console.log(`${name} was caught!`);
    state.pokedex[name] = data;
  } else {
    console.log(`${name} escaped!`);
  }
}

