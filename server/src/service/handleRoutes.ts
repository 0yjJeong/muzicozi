import { Express } from 'express';
import { songRouter } from '../routes';

export const handleRoutes = (app: Express) => {
  app.use('/song', songRouter);
  return app;
};
