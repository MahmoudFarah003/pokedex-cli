import readline from "readline";
import { commandMap } from "./command_map.js";
import type { State } from "./state.js";
import { initState } from "./state.js";
export function cleanInput(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .join(",");
}
export function startREPL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const state: State = initState();

  rl.prompt();

  rl.on("line", async (line) => {
    const input = cleanInput(line);
    const words = input.split(",");

    if (words[0] === "exit") {
      rl.close();
      return;
    }

    const command = commandMap[words[0]];

    if (!command) {
      console.log(`${words[0]} is not a valid command.`);
      rl.prompt();
      return;
    }

    try {
      await command.callback(state, ...words.slice(1));
    } catch (err: any) {
      console.log(err.message);
    }

    rl.prompt();
  });
}

