/* Exercise 4: Utility Types (Partial & Readonly)

Problem: Use TypeScript utility types to enforce immutability and optional updates.

Tasks:

A Make changes accept a Partial<Config> (all fields optional).

B Make the returned object Readonly<Config>.

*/


interface Config {
  id: number;
  name: string;
  enabled: boolean;
}

function updateConfig(current: Config, changes: Partial<Config>): Readonly<Config> {
  return { ...current, ...changes };
}

// Test case
const config: Config = { id: 1, name: "App", enabled: true };
const updated = updateConfig(config, { enabled: false }); // Should work
// updated.name = "New Name"; // Should cause a TS error (readonly)