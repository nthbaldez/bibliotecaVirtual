import { File } from '../model/File';
import { FilesDTO, IFilesRepository } from '../repositories/interfaces/IFilesRepository';

class FilesRepository implements IFilesRepository {

  private files: File[];

  private static INSTANCE: FilesRepository;

  private constructor() {
    this.files = [];
  }

  public static getInstance(): FilesRepository {
    if (!FilesRepository.INSTANCE) {
      FilesRepository.INSTANCE = new FilesRepository;
    }

    return FilesRepository.INSTANCE;
  }

    findByName(name: string): File {
      const file = this.files.find(file => file.name === name);
      return file;
    }

    list(): File[] {
      return this.files;
    }

    create({ name, description, content}: FilesDTO): void {
      const file = new File() 
  
      Object.assign(file, {
        name,
        description,
        content,
        createAt: new Date()
      });

      this.files.push(file);
    }
}

export { FilesRepository };
