"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
const pets_controller_1 = __importDefault(require("../controllers/pets.controller"));
const pets_service_1 = __importDefault(require("../services/pets.service"));
tsyringe_1.container.register("PetsController", { useClass: pets_controller_1.default });
tsyringe_1.container.register("PetsService", { useClass: pets_service_1.default });
