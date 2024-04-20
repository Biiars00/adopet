export interface IAdoptionServiceProps {
  pet: {
    id: string;
    name: string;
  };
  adoption: {
    id: string;
    name: string;
  };
  instituicion: {
    id: string;
    name: string;
  };
  status: string;
}

interface IAdoptionsService {
  adoptPets(id: string, cpf: string, cpfCnpj: string): Promise<string>;
}

export default IAdoptionsService;
