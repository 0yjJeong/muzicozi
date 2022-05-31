import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import config from '../lib/config';

export const handleMiddlewares = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(
    cors({
      origin: config.ORIGIN,
      credentials: true,
    })
  );
  return app;
};
