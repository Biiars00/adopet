export interface IAdopterRegisterProps {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  local: string;
}

interface IAdopterRegisterRepository {
  getAdoptersRegistrationsFromDB(): Promise<IAdopterRegisterProps[]>;
  getAdoptersRegistrationByIdFromDB(id: string): Promise<IAdopterRegisterProps>;
  addAdopterRegisterFromDB(data: any): Promise<string>;
  updateAdopterRegisterFromDB(id: string, data: any): Promise<string>;
  removeAdopterRegisterFromDB(id: string): Promise<string>;
}

export default IAdopterRegisterRepository;
