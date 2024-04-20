import { inject, injectable } from "tsyringe";
import AdoptersRepository from "../repositories/adopters.repository";
import StorageFilesGateway from "../gateways/storageFiles.gateway";

@injectable()
class AdoptersService {
  constructor(
    @inject("AdoptersRepository")
    private adoptersRepository: AdoptersRepository,
    @inject("StorageFilesGateway")
    private storageFilesGateway: StorageFilesGateway
  ) {}

  async getAdoptersRegistrations() {
    const dataListDB =
      await this.adoptersRepository.getAdoptersRegistrationsFromDB();

    if (!dataListDB) {
      throw new Error("Response Not Found!");
    }

    return dataListDB;
  }

  async getAdoptersRegistrationById(id: string) {
    const tutorDataFromDB =
      await this.adoptersRepository.getAdoptersRegistrationByIdFromDB(id);

    if (!tutorDataFromDB) {
      throw new Error("Response Not Found!");
    }

    return tutorDataFromDB;
  }

  async addAdopterRegister(data: any) {
    const createTutorData =
      await this.adoptersRepository.addAdopterRegisterFromDB(data);

    if (!createTutorData) {
      throw new Error("Response Not Found!");
    }

    return "Registration completed successfully!";
  }

  async updateAdopterRegister(id: string, data: any) {
    const updateTutorData =
      await this.adoptersRepository.updateAdopterRegisterFromDB(id, data);

    if (!updateTutorData) {
      throw new Error("Response Not Found!");
    }

    return "Data updated successfully!";
  }

  async removeAdopterRegister(id: string) {
    const removeTutorData =
      await this.adoptersRepository.removeAdopterRegisterFromDB(id);

    if (!removeTutorData) {
      throw new Error("Response Not Found!");
    }

    return "Registration successfully removed!";
  }

  async uploadImageAdopter(id: any, fileName: string, fileBuffer: Buffer) {
    const responseGateway = await this.storageFilesGateway.uploadImage(
      fileBuffer,
      fileName
    );

    const updatePetDB =
      await this.adoptersRepository.updateAdopterRegisterFromDB(id, {
        image: responseGateway,
      });

    if (!responseGateway && !updatePetDB) {
      throw new Error("There was no response to the request!");
    }

    return responseGateway;
  }
}

export default AdoptersService;
