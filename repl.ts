import readline from "readline";
import { getCommands } from "./commands.js";

export function startREPL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();

  rl.prompt();

  rl.on("line", (input) => {
    const commandName = input.trim();

    const command = commands[commandName];

    if (!command) {
      console.log("Unknown command");
    } else {
      try {
        command.callback(commands);
      } catch (err) {
        console.error("Error executing command:", err);
      }
    }

    rl.prompt();   });
}

