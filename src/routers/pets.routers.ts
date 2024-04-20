import "reflect-metadata";
import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import PetsController from "../controllers/pets.controller";
import "../dependencies/dependency";

const petsRouter = Router();
const controller = container.resolve(PetsController);

petsRouter.get("/", (req: Request, res: Response) => {
  return controller.getListPets(req, res);
});

petsRouter.get("/:id", (req: Request, res: Response) => {
  return controller.getPetById(req, res);
});

petsRouter.post("/", (req: Request, res: Response) => {
  return controller.addPet(req, res);
});

petsRouter.put("/:id", (req: Request, res: Response) => {
  return controller.updatePet(req, res);
});

petsRouter.delete("/:id", (req: Request, res: Response) => {
  return controller.removePet(req, res);
});

// petsRouter.post("/upload/:id", (req: Request, res: Response) => {
//   return controller.uploadImagePet(req, res);
// });

export default petsRouter;
