import { File } from '../../model/File';

interface FilesDTO {
  name: string;
  description: string;
  content: string;
}

interface IFilesRepository {
  findByName(name: string): File;
  list(): File[];
  create({ name, description, content }: FilesDTO): void;
}

export { FilesDTO, IFilesRepository };
