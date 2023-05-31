import express from 'express';
import { filesRoutes } from './routes/files.routes'

const app = express();

app.use(express.json());

app.use("/files", filesRoutes);
app.listen(3333, () => console.log('Server is running!'));
