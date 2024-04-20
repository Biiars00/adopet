import { inject, injectable } from "tsyringe";
import AdoptionsRepository from "../repositories/adoption.repository";
import IAdoptionsService from "../interfaces/services/adoption.interface";

@injectable()
class AdoptionsService implements IAdoptionsService {
  constructor(
    @inject("AdoptionsRepository")
    private adoptionsRepository: AdoptionsRepository
  ) {}

  async adoptPets(id: string, cpf: string, cpfCnpj: string) {
    const resposeDB = await this.adoptionsRepository.adoptPetsFromDB(
      id,
      cpf,
      cpfCnpj
    );

    if (!resposeDB) {
      throw new Error("Response Not Found!");
    }

    return "Successfully adopted pet!";
  }
}

export default AdoptionsService;
