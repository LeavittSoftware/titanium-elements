// @googlemaps/js-api-loader v2 reads process.env.NODE_ENV at module scope, which throws in
// browser environments that don't define `process` (raw ESM, esbuild w/o define, etc.).
// Define a minimal shim only when absent so the component is self-contained for consumers.
const globalProcess = globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
};
if (typeof globalProcess.process === 'undefined') {
  globalProcess.process = { env: { NODE_ENV: 'production' } };
} else if (typeof globalProcess.process.env === 'undefined') {
  globalProcess.process.env = { NODE_ENV: 'production' };
}

export {};
