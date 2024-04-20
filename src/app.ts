import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import fileUpload from "express-fileupload";
import cors from "cors";
import petsRouter from "./routers/pets.routers";
import adopterRouter from "./routers/adopters.routers";
import institutionsRouter from "./routers/institutions.routers";
import "../src/dependencies/dependency";
import adoptionsPetsRouter from "./routers/adoptions.routers";

class App {
  public app: express.Express;

  constructor(expressApp = express()) {
    this.app = expressApp;
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(fileUpload());
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.app.use("/pet", petsRouter);
    this.app.use("/adopter", adopterRouter);
    this.app.use("/institution", institutionsRouter);
    this.app.use("/adoption", adoptionsPetsRouter);

    this.app.use((req, res) => {
      res.status(404).send({ status: "Not Found!" });
    });
  }

  public start(PORT: string | number): void {
    console.log("BEM VINDOOOOO");
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
