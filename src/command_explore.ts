import type { State } from "./state.js";
import { getLocationArea } from "./pokeapi.js";

export async function commandExplore(state: State, areaName?: string) {
  if (!areaName) {
    console.log("Please provide a location area name.");
    return;
  }

  console.log(`Exploring ${areaName}...`);
  const data = await getLocationArea(state, areaName);

  console.log("Found Pokemon:");
  data.pokemon_encounters.forEach((p: any) => {
    console.log(` - ${p.pokemon.name}`);
  });
}

