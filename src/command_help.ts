import type { State } from "./state.js";

export async function commandHelp(state: State) {
  console.log("Available commands:");
  console.log(" - pokemon <name>");
  console.log(" - catch <name>");
  console.log(" - explore <area>");
  console.log(" - exit");
}

