"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const pets_controller_1 = __importDefault(require("../controllers/pets.controller"));
const petsRouter = (0, express_1.Router)();
const controller = tsyringe_1.container.resolve(pets_controller_1.default);
petsRouter.get("/", (req, res) => {
    return controller.getPets(req, res);
});
exports.default = petsRouter;
