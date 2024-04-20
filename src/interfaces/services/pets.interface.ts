export interface IPetsProps {
  id: string;
  name: string;
  age: number;
  size: string;
  description: string;
  local: string;
  image: null;
  status: string;
}

interface IPetsService {
  getListPets(): Promise<IPetsProps[]>;
  getPetById(id: string): Promise<IPetsProps>;
  addPet(data: any): Promise<string>;
  updatePet(id: string, data: any): Promise<string>;
  removePet(id: string): Promise<string>;
}

export default IPetsService;
