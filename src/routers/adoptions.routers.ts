import "reflect-metadata";
import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import AdoptionsController from "../controllers/adoptions.controller";

const adoptionsRouter = Router();

const controller = container.resolve(AdoptionsController);

adoptionsRouter.post("/:id", (req: Request, res: Response) => {
  return controller.adoptPets(req, res);
});

export default adoptionsRouter;
