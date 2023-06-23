import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './utils';

const app: Application = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  });
});

app.post('/post', async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: 'Hello World from post !',
  });
});

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, (): void => {
      console.log(`Server running successfully on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
};

startServer();
