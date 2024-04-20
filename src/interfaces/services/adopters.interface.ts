export interface IAdopterRegisterProps {
  cpf: string;
  name: string;
  email: string;
  telephone: string;
  local: string;
  password: string;
}

interface IAdopterRegisterService {
  getAdoptersRegistrations(): Promise<IAdopterRegisterProps[]>;
  getAdoptersRegistrationById(id: string): Promise<IAdopterRegisterProps>;
  addAdopterRegister(data: any): Promise<string>;
  updateAdopterRegister(id: string, data: any): Promise<string>;
  removeAdopterRegister(id: string): Promise<string>;
}

export default IAdopterRegisterService;
