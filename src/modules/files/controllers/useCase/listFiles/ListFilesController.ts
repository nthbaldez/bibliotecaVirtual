import { Request, Response } from 'express';

import { ListFilesUseCase } from './ListFilesUseCase';

class ListFilesController {

  constructor(private listCategoriesUseCase: ListFilesUseCase) {};
  handle(request: Request, response: Response): Response {
    const allFiles = this.listCategoriesUseCase.execute();

    return response.status(201).send(allFiles);
  }
}

export { ListFilesController };
