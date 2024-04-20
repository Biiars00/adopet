export interface IInstitutionsRegistersProps {
  cpfCnpj: string;
  name: string;
  email: string;
  telephone: string;
  local: string;
  password: string;
}

interface IInstitutionsRegistersService {
  getListInstitutions(): Promise<IInstitutionsRegistersProps[]>;
  getInstitutionById(id: string): Promise<IInstitutionsRegistersProps>;
  addInstitution(data: any): Promise<string>;
  updateInstitution(id: string, data: any): Promise<string>;
  removeInstitution(id: string): Promise<string>;
}

export default IInstitutionsRegistersService;
