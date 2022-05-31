import { Express, json, urlencoded } from 'express';
import cors from 'cors';

export const handleMiddlewares = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );
  return app;
};
