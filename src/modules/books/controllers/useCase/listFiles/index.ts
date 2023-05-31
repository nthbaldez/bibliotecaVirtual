import { FilesRepository } from "../../../repositories/FilesRepository";
import { ListFilesController } from "../listFiles/ListFilesController";
import { ListFilesUseCase } from "../listFiles/ListFilesUseCase";

const filesRepository = FilesRepository.getInstance();
const listFileUseCase = new ListFilesUseCase(filesRepository);
const listFilesController = new ListFilesController(listFileUseCase);

export { listFilesController };
