import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import InstitutionsService from "../services/institutions.service";

@injectable()
class InstitutionsController {
  constructor(
    @inject("InstitutionsService")
    private institutionsService: InstitutionsService
  ) {}

  async getListInstitutions(req: Request, res: Response) {
    const response = await this.institutionsService.getListInstitutions();

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }

  async getInstitutionById(req: Request, res: Response) {
    const response = await this.institutionsService.getInstitutionById(
      req.params.id
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }

  async addInstitution(req: Request, res: Response) {
    const response = await this.institutionsService.addInstitution(req.body);

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(201).send(response);
  }

  async updateInstitution(req: Request, res: Response) {
    const response = await this.institutionsService.updateInstitution(
      req.params.id,
      req.body
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }

  async removeInstitution(req: Request, res: Response) {
    const response = await this.institutionsService.removeInstitution(
      req.params.id
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(204).send(response);
  }

  // async uploadImageInstitution(req: Request, res: Response) {
  //   if (!req.params.id && !req.params.fileName && !req.body.fileBuffer) {
  //     throw new Error("Missing argument in request!");
  //   }

  //   const response = await this.institutionsService.uploadImagePet(
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

export default InstitutionsController;
