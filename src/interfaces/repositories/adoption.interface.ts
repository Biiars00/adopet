export interface IAdoptionProps {
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

interface IAdoptionsRepository {
  adoptPetsFromDB(id: string, cpf: string, cpfCnpj: string): Promise<string>;
}

export default IAdoptionsRepository;
