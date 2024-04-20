import { inject, injectable } from "tsyringe";
import PetsRepository from "../repositories/pets.repository";
import StorageFilesGateway from "../gateways/storageFiles.gateway";
import IPetsService, {
  IPetsProps,
} from "../interfaces/services/pets.interface";

@injectable()
class PetsService implements IPetsService {
  constructor(
    @inject("PetsRepository") private petsRepository: PetsRepository,
    @inject("StorageFilesGateway")
    private storageFilesGateway: StorageFilesGateway
  ) {}

  async getListPets(): Promise<IPetsProps[]> {
    const petsListDB = await this.petsRepository.getListPetsFromDB();

    if (!petsListDB) {
      throw new Error("There was no response to the request!");
    }

    return petsListDB;
  }

  async getPetById(id: string): Promise<IPetsProps> {
    const petByIdDB = await this.petsRepository.getPetByIdFromDB(id);

    if (!petByIdDB) {
      throw new Error("There was no response to the request!");
    }

    return petByIdDB;
  }

  async addPet(data: any) {
    const addPetDB = await this.petsRepository.addPetFromDB(data);

    if (!addPetDB) {
      throw new Error("There was no response to the request!");
    }

    return "Data registered successfully!";
  }

  async updatePet(id: string, data: any) {
    const updatePetDB = await this.petsRepository.updatePetFromDB(id, data);

    if (!updatePetDB) {
      throw new Error("There was no response to the request!");
    }

    return "Data updated successfully!";
  }

  async removePet(id: string) {
    const removePetDB = await this.petsRepository.removePetFromDB(id);

    if (!removePetDB) {
      throw new Error("There was no response to the request!");
    }

    return "Registration successfully removed!";
  }

  // async uploadImagePet(id: any, fileName: string, fileBuffer: Buffer) {
  //   const responseGateway = await this.storageFilesGateway.uploadImage(
  //     fileBuffer,
  //     fileName
  //   );

  //   const updatePetDB = await this.petsRepository.updatePetFromDB(id, {
  //     image: responseGateway,
  //   });

  //   if (!responseGateway && !updatePetDB) {
  //     throw new Error("There was no response to the request!");
  //   }

  //   return responseGateway;
  // }
}

export default PetsService;
