"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
new app_1.App().start(PORT);
