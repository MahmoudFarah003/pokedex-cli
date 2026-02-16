//import { initState } from "./state.js";
import {   startREPL } from "./repl.js";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap } from "./command_map.js";
import { commandMap as commandMapBack } from "./command_mapb.js";
import { Cache } from "./pokecache.js";

const state = {
  cache: new Cache(60000),
  pokedex: {} as Record<string, any>,
};

function main() {
 
  startREPL();}

main();

