import { commandCatch } from "./command_catch.js";
import { commandExplore } from "./command_explore.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap as commandMapLocations } from "./command_mapb.js"; 

import type { State } from "./state.js";
import { commandInspect } from "./command_inspect.js";

export interface Command {
  callback: (state: State, ...args: string[]) => Promise<void>;

}
export const commandMap: Record<string, Command> = {
  catch: { callback: commandCatch },
  explore: { callback: commandExplore },
inspect: { callback: commandInspect },
  exit: { callback: commandExit },
  help: { callback: commandHelp },
  map: { callback: commandMapLocations },
};

