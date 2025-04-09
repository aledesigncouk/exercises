/*

Problem:
Create a function that returns a readonly version of a Config object.

*/

interface Config {
    apiUrl: string;
    timeout: number;
    retries: number;
}

function getReadonlyConfig(config: Config): Readonly<Config> {
    return config;
}

// Test case
const readonlyConfig = getReadonlyConfig({ apiUrl: "https://api.example.com", timeout: 5000, retries: 3 });
// readonlyConfig.timeout = 10000; // Should cause a TS error!

console.log(readonlyConfig)