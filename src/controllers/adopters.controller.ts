import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import AdoptersService from "../services/adopters.service";

@injectable()
class AdoptersController {
  constructor(
    @inject("AdoptersService")
    private adoptersService: AdoptersService
  ) {}

  async getAdoptersRegistrations(req: Request, res: Response) {
    const response = await this.adoptersService.getAdoptersRegistrations();

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }

  async getAdoptersRegistrationById(req: Request, res: Response) {
    const response = await this.adoptersService.getAdoptersRegistrationById(
      req.params.id
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }

  async addAdopterRegister(req: Request, res: Response) {
    const response = await this.adoptersService.addAdopterRegister(req.body);

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(201).send(response);
  }

  async updateAdopterRegister(req: Request, res: Response) {
    const response = await this.adoptersService.updateAdopterRegister(
      req.params.id,
      req.body
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }

  async removeAdopterRegister(req: Request, res: Response) {
    const response = await this.adoptersService.removeAdopterRegister(
      req.params.id
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(204).send(response);
  }

  async uploadImageAdopter(req: Request, res: Response) {
    if (!req.params.id && !req.params.fileName && !req.body.fileBuffer) {
      throw new Error("Missing argument in request!");
    }

    const response = await this.adoptersService.uploadImageAdopter(
      req.params.id,
      req.body.fileName,
      req.body.fileBuffer
    );

    if (!response) {
      throw new Error("Resource Not Found!");
    }

    res.status(201).send(response);
  }
}

export default AdoptersController;
