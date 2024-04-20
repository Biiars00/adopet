export interface IInstitutionsProps {
  cpfCnpj: string;
  name: string;
  email: string;
  telephone: string;
  local: string;
  password: string;
  image: null;
}

interface IInstitutionsRepository {
  getListInstitutionsFromDB(): Promise<IInstitutionsProps[]>;
  getInstitutionByIdFromDB(id: string): Promise<IInstitutionsProps>;
  addInstitutionFromDB(data: any): Promise<string>;
  updateInstitutionFromDB(id: string, data: any): Promise<string>;
  removeInstitutionFromDB(id: string): Promise<string>;
}

export default IInstitutionsRepository;
