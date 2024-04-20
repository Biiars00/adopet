import { inject, injectable } from "tsyringe";
import InstituitionsRepository from "../repositories/institutions.repository";
import StorageFilesGateway from "../gateways/storageFiles.gateway";
import IInstitutionsRegistersService, {
  IInstitutionsRegistersProps,
} from "../interfaces/services/institutions.interface";

@injectable()
class InstitutionsService implements IInstitutionsRegistersService {
  constructor(
    @inject("InstituitionsRepository")
    private instituitionsRepository: InstituitionsRepository,
    @inject("StorageFilesGateway")
    private storageFilesGateway: StorageFilesGateway
  ) {}

  async getListInstitutions() {
    const listInstitutions =
      await this.instituitionsRepository.getListInstitutionsFromDB();

    if (!listInstitutions) {
      throw new Error("There was no response to the request!");
    }

    return listInstitutions;
  }

  async getInstitutionById(id: string): Promise<IInstitutionsRegistersProps> {
    const institutionById =
      await this.instituitionsRepository.getInstitutionByIdFromDB(id);

    if (!institutionById) {
      throw new Error("There was no response to the request!");
    }

    return institutionById;
  }

  async addInstitution(data: any) {
    const createInstitution =
      await this.instituitionsRepository.addInstitutionFromDB(data);

    if (!createInstitution) {
      throw new Error("There was no response to the request!");
    }

    return "Registration completed successfully!";
  }

  async updateInstitution(id: string, data: any) {
    const updateInstitutionById =
      await this.instituitionsRepository.updateInstitutionFromDB(id, data);

    if (!updateInstitutionById) {
      throw new Error("There was no response to the request!");
    }

    return "Data updated successfully!";
  }

  async removeInstitution(id: string) {
    const removeInstitutionById =
      await this.instituitionsRepository.removeInstitutionFromDB(id);

    if (!removeInstitutionById) {
      throw new Error("There was no response to the request!");
    }

    return "Institution removed successfully!";
  }

  // async uploadImagePet(id: any, fileName: string, fileBuffer: Buffer) {
  //   const responseGateway = await this.storageFilesGateway.uploadImage(
  //     fileBuffer,
  //     fileName
  //   );

  //   const updatePetDB =
  //     await this.instituitionsRepository.updateInstitutionFromDB(id, {
  //       image: responseGateway,
  //     });

  //   if (!responseGateway && !updatePetDB) {
  //     throw new Error("There was no response to the request!");
  //   }

  //   return responseGateway;
  // }
}

export default InstitutionsService;
