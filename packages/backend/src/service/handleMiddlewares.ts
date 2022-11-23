import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from '../lib/config';

export const handleMiddlewares = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: config.ORIGIN,
      credentials: true,
    })
  );
  return app;
};
