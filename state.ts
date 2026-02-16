import { createInterface, type Interface } from "readline";
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};
export type State = {
  readline: Interface;
  commands: Map<string, CLICommand>;
};
export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const commands = new Map<string, CLICommand>();
  return {
    readline: rl,
    commands: commands,
  };
}
