import type { State } from "./state.js";
import type { PokemonData } from "./pokeapi.js";

export async function commandInspect(
  state: State,
  name: string
): Promise<void> {
  if (!name) {
    console.log("Please provide the name of a Pokemon to inspect.");
    return;
  }

  const pokemon: PokemonData | undefined = state.pokedex[name.toLowerCase()];

  if (!pokemon) {
    console.log("you have not caught that pokemon");
    return;
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const [statName, value] of Object.entries(pokemon.stats)) {
    console.log(`  -${statName}: ${value}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  - ${type}`);
  }
}
