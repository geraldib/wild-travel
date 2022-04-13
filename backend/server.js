// imports
import express from 'express';
import path from 'path';

// import configs
import { config } from './config.js';
import { apiRoutes } from './routes/index.js';

// start express app
const app = express();

// static folders
// app.use("/example", express.static("example"));

// config server
config(app);

// init routes
apiRoutes(app);

export const __dirname = path.resolve(
  path.dirname(decodeURI(new URL(import.meta.url).pathname))
);
