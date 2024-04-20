import { injectable } from "tsyringe";
import { database } from "../database/firebase-admin";
import IAdoptionsRepository from "../interfaces/repositories/adoption.interface";

@injectable()
class AdoptionsRepository implements IAdoptionsRepository {
  private adoptionDB;
  private petsDB;
  private institutionsDB;
  private tutorDB;

  constructor() {
    this.adoptionDB = database.firestore().collection("adoption");
    this.petsDB = database.firestore().collection("pets");
    this.institutionsDB = database.firestore().collection("institutions");
    this.tutorDB = database.firestore().collection("tutor");
  }

  async adoptPetsFromDB(id: string, cpf: string, cpfCnpj: string) {
    const collectionPetsDB = this.petsDB.doc(id);
    const collectionTutorDB = this.tutorDB.doc(cpf);
    const collectionInstitutionsDB = this.institutionsDB.doc(cpfCnpj);

    const [petsDoc, institutionsDoc, tutorDoc] = await Promise.all([
      collectionPetsDB.get(),
      collectionInstitutionsDB.get(),
      collectionTutorDB.get(),
    ]);

    let extractData;

    if (petsDoc.exists && institutionsDoc.exists && tutorDoc.exists) {
      const petsData = petsDoc.data();
      const institutionData = institutionsDoc.data();
      const tutorData = tutorDoc.data();

      if (petsData && institutionData && tutorData) {
        extractData = {
          pet: {
            id: petsData.id,
            name: petsData.name,
          },
          institution: {
            cpfCnpj: institutionData.cpfCnpj,
            name: institutionData.name,
          },
          tutor: {
            cpf: tutorData.cpf,
            name: tutorData.name,
          },
          status: "Adotado",
        };
      }
    }

    const doc = this.adoptionDB.doc(`${id}-${cpf}-${cpfCnpj}`);
    if (extractData) {
      if (Object.keys(extractData).length > 0) {
        await doc.set(extractData);
      }
    }

    return "Successfully adopted pet!";
  }
}

export default AdoptionsRepository;
