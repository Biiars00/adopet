import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import PetsService from "../services/pets.service";

@injectable()
class PetsController {
  constructor(@inject("PetsService") private petsService: PetsService) {}

  async getListPets(req: Request, res: Response) {
    const response = await this.petsService.getListPets();

    if (!response) {
      throw new Error("Resource Not Found!");
    }

    res.status(200).send(response);
  }

  async getPetById(req: Request, res: Response) {
    if (!req.params.id) {
      throw new Error("Missing argument in request!");
    }

    const response = await this.petsService.getPetById(req.params.id);

    if (!response) {
      throw new Error("Resource Not Found!");
    }

    res.status(200).send(response);
  }

  async addPet(req: Request, res: Response) {
    if (!req.body) {
      throw new Error("Missing argument in request!");
    }

    const response = await this.petsService.addPet(req.body);

    if (!response) {
      throw new Error("Resource Not Found!");
    }

    res.status(201).send(response);
  }

  async updatePet(req: Request, res: Response) {
    if (!req.params.id && !req.body) {
      throw new Error("Missing argument in request!");
    }

    const response = await this.petsService.updatePet(req.params.id, req.body);

    if (!response) {
      throw new Error("Resource Not Found!");
    }

    res.status(200).send(response);
  }

  async removePet(req: Request, res: Response) {
    if (!req.params.id) {
      throw new Error("Missing argument in request!");
    }

    const response = await this.petsService.removePet(req.params.id);

    if (!response) {
      throw new Error("Resource Not Found!");
    }

    res.status(204).send(response);
  }

  // async uploadImagePet(req: Request, res: Response) {
  //   if (!req.params.id && !req.params.fileName && !req.body.fileBuffer) {
  //     throw new Error("Missing argument in request!");
  //   }

  //   const response = await this.petsService.uploadImagePet(
  //     req.params.id,
  //     req.body.fileName,
  //     req.body.fileBuffer
  //   );

  //   if (!response) {
  //     throw new Error("Resource Not Found!");
  //   }

  //   res.status(201).send(response);
  // }
}

export default PetsController;
