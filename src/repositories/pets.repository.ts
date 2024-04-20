import { injectable } from "tsyringe";
import { database } from "../database/firebase-admin";
import IPetsRepository, {
  IPetsProps,
} from "../interfaces/repositories/pets.interface";

@injectable()
class PetsRepository implements IPetsRepository {
  private petsDB;

  constructor() {
    this.petsDB = database.firestore().collection("pets");
  }

  async getListPetsFromDB(): Promise<IPetsProps[]> {
    const docRef = await this.petsDB.orderBy("name").get();

    if (docRef.empty) {
      throw new Error("Not data found!");
    }

    const dataList = docRef.docs.map((doc) => ({
      ...(doc.data() as IPetsProps),
    }));

    return dataList;
  }

  async getPetByIdFromDB(id: string): Promise<IPetsProps> {
    const docRef = await this.petsDB.doc(id).get();
    const documentById = docRef.data();

    if (docRef) {
      return documentById as IPetsProps;
    } else {
      throw new Error("Document not found!");
    }
  }

  async addPetFromDB(data: any): Promise<string> {
    const docRef = this.petsDB.doc();
    const idDoc = docRef.id;
    data.id = idDoc;

    const getdoc = await docRef.get();

    if (getdoc.exists) {
      throw new Error(`Document with ID ${idDoc} already exists!`);
    }

    await docRef.set({ ...data });

    return "Data registered successfully!";
  }

  async updatePetFromDB(id: string, data: any): Promise<string> {
    const docRef = this.petsDB.doc(id);
    const document = await docRef.update(data);

    if (document) {
      return "Data updated successfully!";
    } else {
      throw new Error("Data not updated!");
    }
  }

  async removePetFromDB(id: string): Promise<string> {
    const docRef = this.petsDB.doc(id);
    const removeDocument = await docRef.delete();

    if (removeDocument) {
      return "Registration successfully removed!";
    } else {
      throw new Error("Registration cannot be removed!");
    }
  }
}

export default PetsRepository;
