"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pets_routers_1 = __importDefault(require("./routers/pets.routers"));
require("../src/dependencies/dependency");
class App {
    constructor(expressApp = (0, express_1.default)()) {
        this.app = expressApp;
        this.config();
    }
    config() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use("/pets", pets_routers_1.default);
        this.app.use((req, res) => {
            res.status(404).send({ status: "Not Found!" });
        });
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
