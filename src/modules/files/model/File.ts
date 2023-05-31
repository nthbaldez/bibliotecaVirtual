import { v4 as uuidV4 } from 'uuid';

class File {
  id?: string;
  name: string;
  content: string;
  description: string;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { File };
