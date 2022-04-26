// imports
import express from 'express';
import path from 'path';

// import configs
import { config } from './config.js';
import { createAdmin } from './database/seeds/userSeed.js';
import { apiRoutes } from './routes/index.js';
import {createAgencies} from "./database/seeds/agenciesSeed.js";

// start express app
const app = express();

// static folders
// app.use("/example", express.static("example"));

// config server
config(app);

//init seed
createAdmin();
createAgencies();

// init routes
apiRoutes(app);

export const __dirname = path.resolve(
  path.dirname(decodeURI(new URL(import.meta.url).pathname))
);
