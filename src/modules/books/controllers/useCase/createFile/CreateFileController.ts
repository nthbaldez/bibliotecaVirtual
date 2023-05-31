import { Request, Response } from 'express';
import { CreateFileUseCase } from './CreateFileUseCase';

class CreateFileController {
  constructor(private createFileUseCase: CreateFileUseCase) {};

  handle(request: Request, response: Response): Response {
    const { name, description, content } = request.body;
    
    this.createFileUseCase.execute({ name, description, content });

    return response.status(201).send();
  }
}

export { CreateFileController };
