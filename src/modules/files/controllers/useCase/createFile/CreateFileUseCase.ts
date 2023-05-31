
import { FilesRepository } from "../../../repositories/FilesRepository";

interface IRequest {
  name: string;
  description: string;
  content: string;
}

class CreateFileUseCase {

  constructor(private filesRepository: FilesRepository) {}

  execute({ name, description, content }: IRequest): void {
    const fileAlreadyExists = this.filesRepository.findByName(name);

    if (fileAlreadyExists) {
      throw new Error("File Already Exists!");   
    }

    this.filesRepository.create({ name, description, content });
  }
}


export { CreateFileUseCase } ;
