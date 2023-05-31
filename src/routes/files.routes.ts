import { Router } from 'express';
import { createFileController } from '../modules/files/controllers/useCase/createFile';
import { listFilesController } from '../modules/files/controllers/useCase/listFiles';


const filesRoutes = Router();

filesRoutes.post("/", (request, response) => {
  return createFileController.handle(request, response);
});

filesRoutes.get("/", (request, response) => {
  return listFilesController.handle(request, response);
})

export { filesRoutes };
