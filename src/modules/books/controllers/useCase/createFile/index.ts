
import { FilesRepository } from "../../../repositories/FilesRepository";
import { CreateFileController } from "./CreateFileController";
import { CreateFileUseCase } from "./CreateFileUseCase";

const filesRepository = FilesRepository.getInstance();
const createFileUseCase = new CreateFileUseCase(filesRepository);
const createFileController = new CreateFileController(createFileUseCase);

export { createFileController };
