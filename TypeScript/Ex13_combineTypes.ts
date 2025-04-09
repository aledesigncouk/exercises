/*

Problem:
Create a function that updates a subset of a Config object and returns it as readonly. Use Partial and Readonly together.

*/

interface Config {
  apiUrl: string;
  timeout: number;
  retries: number;
}


function updateReadonlyConfig(
  config: Config,
  updates: Partial<Config>
): Readonly<Config> {
  return { ...config, ...updates };
}

// Test case
const updatedConfig = updateReadonlyConfig(
  { apiUrl: "https://api.example.com", timeout: 5000, retries: 3 },
  { timeout: 10000 }
);
// updatedConfig.retries = 5; // Should cause a TS error!