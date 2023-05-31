import { File } from "../../../model/File";
import { FilesRepository } from "../../../repositories/FilesRepository";

class ListFilesUseCase {

  constructor(private filesRepository: FilesRepository) {}

  execute(): File[] {
    const categories = this.filesRepository.list();
    return categories;
  }
}

export { ListFilesUseCase };
