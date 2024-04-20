import { injectable } from "tsyringe";
import { database } from "../database/firebase-admin";
import IAdopterRegisterRepository, {
  IAdopterRegisterProps,
} from "../interfaces/repositories/adopters.interface";

@injectable()
class RegistrationsRepository implements IAdopterRegisterRepository {
  private tutorDB;

  constructor() {
    this.tutorDB = database.firestore().collection("tutor");
  }

  async getAdoptersRegistrationsFromDB(): Promise<IAdopterRegisterProps[]> {
    const docRef = await this.tutorDB.get();

    if (docRef.empty) {
      throw new Error("No data found!");
    }

    const dataList = docRef.docs.map((doc) => ({
      ...(doc.data() as IAdopterRegisterProps),
    }));

    return dataList;
  }

  async getAdoptersRegistrationByIdFromDB(
    id: string
  ): Promise<IAdopterRegisterProps> {
    const docRef = await this.tutorDB.doc(id).get();
    const documentById = docRef.data();

    if (docRef) {
      return documentById as IAdopterRegisterProps;
    } else {
      throw new Error("Document not found!");
    }
  }

  async addAdopterRegisterFromDB(data: any): Promise<string> {
    const cpf: string = data.cpf;
    console.log(cpf);

    if (!cpf) {
      throw new Error("CPF inválido.");
    }
    const docRef = this.tutorDB.doc(`${cpf}`);

    const getdoc = await docRef.get();

    if (!getdoc.exists) {
      await docRef.set(data);
      return "Registration completed successfully!";
    } else {
      return "Adopter already registered!";
    }
  }

  async updateAdopterRegisterFromDB(id: string, data: any): Promise<string> {
    const docRef = this.tutorDB.doc(id);
    const document = await docRef.update(data);

    if (document) {
      return "Data updated successfully!";
    } else {
      throw new Error("Data not updated!");
    }
  }

  async removeAdopterRegisterFromDB(id: string): Promise<string> {
    const docRef = this.tutorDB.doc(id);
    const removeDocument = await docRef.delete();

    if (removeDocument) {
      return "Registration successfully removed!";
    } else {
      throw new Error("Registration cannot be removed!");
    }
  }
}

export default RegistrationsRepository;
