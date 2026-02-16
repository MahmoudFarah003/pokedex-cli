import { createInterface, type Interface } from "readline";

// Define the CLICommand type with the new callback signature
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

// Define the State type
export type State = {
  readline: Interface;
  commands: Map<string, CLICommand>;
};

// Initialize function to create the State object
export function initState(): State {
  // Create the readline interface
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Create the commands registry
  const commands = new Map<string, CLICommand>();

  // Return the initialized State object
  return {
    readline: rl,
    commands: commands,
  };
}
