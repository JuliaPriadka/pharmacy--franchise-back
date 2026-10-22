import pino from 'pino-http';
import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const setupServer = () => {
  const port = Number(process.env.PORT) || 3000;
  const app = express();

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.send({ message: 'Hello world' });
  });

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
  });
};
