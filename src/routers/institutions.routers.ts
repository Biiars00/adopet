import "reflect-metadata";
import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import InstitutionsController from "../controllers/institutions.controller";

const institutionsRouter = Router();
const controller = container.resolve(InstitutionsController);

institutionsRouter.get("/", (req: Request, res: Response) => {
  return controller.getListInstitutions(req, res);
});

institutionsRouter.get("/:id", (req: Request, res: Response) => {
  return controller.getInstitutionById(req, res);
});

institutionsRouter.post("/", (req: Request, res: Response) => {
  return controller.addInstitution(req, res);
});

institutionsRouter.put("/:id", (req: Request, res: Response) => {
  return controller.updateInstitution(req, res);
});

institutionsRouter.delete("/:id", (req: Request, res: Response) => {
  return controller.removeInstitution(req, res);
});

// institutionsRouter.post("/upload/:id", (req: Request, res: Response) => {
//   return controller.uploadImageInstitution(req, res);
// });

export default institutionsRouter;
