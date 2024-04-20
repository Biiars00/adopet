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

interface IPetsRepository {
  getListPetsFromDB(): Promise<IPetsProps[]>;
  getPetByIdFromDB(id: string): Promise<IPetsProps>;
  addPetFromDB(data: any): Promise<string>;
  updatePetFromDB(id: string, data: any): Promise<string>;
  removePetFromDB(id: string): Promise<string>;
}

export default IPetsRepository;
