import type { State } from "./state.js";

export interface PokemonData {
  name: string;
  id: number;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  stats: Record<string, number>;
}

export async function getPokemon(name: string): Promise<PokemonData> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  if (!response.ok) throw new Error(`Pokemon ${name} not found`);
  const data = await response.json();

  return {
    name: data.name,
    id: data.id,
    types: data.types.map((t: any) => t.type.name),
    abilities: data.abilities.map((a: any) => a.ability.name),
    height: data.height,
    weight: data.weight,
    stats: data.stats.reduce((acc: Record<string, number>, s: any) => {
      acc[s.stat.name] = s.base_stat;
      return acc;
    }, {}),
  };
}


export async function getLocationArea(state: State, areaName: string) {
  const cacheKey = `location-area-${areaName}`;

  const cached = state.cache.get(cacheKey);
  if (cached) return cached;

  const res = await fetch(`https://pokeapi.co/api/v2/location-area/${areaName}`);
  if (!res.ok) throw new Error("Location area not found");

  const data = await res.json();
  state.cache.add(cacheKey, data);

  return data;
}

