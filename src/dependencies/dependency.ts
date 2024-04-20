import { container } from "tsyringe";
import PetsController from "../controllers/pets.controller";
import PetsService from "../services/pets.service";
import PetsRepository from "../repositories/pets.repository";

import AdoptersController from "../controllers/adopters.controller";
import AdoptersService from "../services/adopters.service";
import AdoptersRepository from "../repositories/adopters.repository";

import InstitutionsService from "../services/institutions.service";
import InstitutionsController from "../controllers/institutions.controller";
import InstituitionsRepository from "../repositories/institutions.repository";

import StorageFilesGateway from "../gateways/storageFiles.gateway";
import AdoptionsRepository from "../repositories/adoption.repository";
import AdoptionsController from "../controllers/adoptions.controller";
import AdoptionsService from "../services/adoption.service";

container.register("StorageFilesGateway", { useClass: StorageFilesGateway });

container.register("PetsController", { useClass: PetsController });
container.register("PetsService", { useClass: PetsService });
container.register("PetsRepository", { useClass: PetsRepository });

container.register("AdoptersController", {
  useClass: AdoptersController,
});
container.register("AdoptersService", { useClass: AdoptersService });
container.register("AdoptersRepository", {
  useClass: AdoptersRepository,
});

container.register("InstitutionsController", {
  useClass: InstitutionsController,
});
container.register("InstitutionsService", { useClass: InstitutionsService });
container.register("InstituitionsRepository", {
  useClass: InstituitionsRepository,
});

container.register("AdoptionsRepository", { useClass: AdoptionsRepository });
container.register("AdoptionsController", { useClass: AdoptionsController });
container.register("AdoptionsService", { useClass: AdoptionsService });

export { container };
