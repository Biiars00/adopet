import "reflect-metadata";
import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import AdoptersController from "../controllers/adopters.controller";

const adopterRouter = Router();

const controller = container.resolve(AdoptersController);

adopterRouter.get("/", (req: Request, res: Response) => {
  return controller.getAdoptersRegistrations(req, res);
});

adopterRouter.get("/:id", (req: Request, res: Response) => {
  return controller.getAdoptersRegistrationById(req, res);
});

adopterRouter.post("/", (req: Request, res: Response) => {
  return controller.addAdopterRegister(req, res);
});

adopterRouter.put("/:id", (req: Request, res: Response) => {
  return controller.updateAdopterRegister(req, res);
});

adopterRouter.delete("/:id", (req: Request, res: Response) => {
  return controller.removeAdopterRegister(req, res);
});

adopterRouter.post("/upload/:id", (req: Request, res: Response) => {
  return controller.uploadImageAdopter(req, res);
});

export default adopterRouter;
