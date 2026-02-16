import type { State } from "./state.js";

export async function commandExit(state: State): Promise<void> {
   process.exit(0);
}

