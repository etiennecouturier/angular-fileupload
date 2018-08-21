import config from './rollup.config.umd.js';
config.format = "es";
config.dest = "dist/file.esm.js";
export default config;