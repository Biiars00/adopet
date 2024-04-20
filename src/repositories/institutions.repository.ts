import { injectable } from "tsyringe";
import { database } from "../database/firebase-admin";
import IInstitutionsRepository, {
  IInstitutionsProps,
} from "../interfaces/repositories/institutions.interface";

@injectable()
class InstituitionsRepository implements IInstitutionsRepository {
  private institutionsDB;

  constructor() {
    this.institutionsDB = database.firestore().collection("institutions");
  }

  async getListInstitutionsFromDB() {
    const docRef = await this.institutionsDB.get();

    if (docRef.empty) {
      throw new Error("No data found!");
    }

    const dataList = docRef.docs.map((doc) => ({
      ...(doc.data() as IInstitutionsProps),
    }));

    return dataList;
  }

  async getInstitutionByIdFromDB(id: string) {
    const docRef = await this.institutionsDB.doc(id).get();
    const data = docRef.data();

    if (docRef) {
      return data as IInstitutionsProps;
    } else {
      throw new Error("Document not found!");
    }
  }

  async addInstitutionFromDB(data: any) {
    const cpfCnpj: IInstitutionsProps = data.cpfCnpj;

    const docRef = this.institutionsDB.doc(`${cpfCnpj}`);

    const getdoc = await docRef.get();

    if (getdoc.exists) {
      throw new Error(`Document with CPF/CNPJ ${cpfCnpj} already exists!`);
    }

    await docRef.set(data);

    return "Registration completed successfully!";
  }

  async updateInstitutionFromDB(id: string, data: any) {
    const docRef = this.institutionsDB.doc(id);
    const updateData = await docRef.update(data);

    if (updateData) {
      return "Data updated successfully!";
    } else {
      throw new Error("Data not updated!");
    }
  }

  async removeInstitutionFromDB(id: string) {
    const docRef = this.institutionsDB.doc(id);
    const removeDocument = await docRef.delete();

    if (removeDocument) {
      return "Institution removed successfully!";
    } else {
      throw new Error("Institution cannot be removed!");
    }
  }
}

export default InstituitionsRepository;
