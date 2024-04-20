import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import AdoptionsService from "../services/adoption.service";

@injectable()
class AdoptionsController {
  constructor(
    @inject("AdoptionsService")
    private adoptionsService: AdoptionsService
  ) {}

  async adoptPets(req: Request, res: Response) {
    if (!req.params.id && !req.body.cpf && !req.body.cpfCnpj) {
      throw new Error("Resource not found, parameters are missing!");
    }

    const response = await this.adoptionsService.adoptPets(
      req.params.id,
      req.body.cpf,
      req.body.cpfCnpj
    );

    if (!response) {
      throw new Error("Response Not Found!");
    }

    res.status(200).send(response);
  }
}

export default AdoptionsController;
