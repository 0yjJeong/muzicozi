import { Express } from 'express';
import { songRouter } from '../routes';
import { authRouter } from '../routes/auth';

export const handleRoutes = (app: Express) => {
  app.use('/song', songRouter);
  app.use('/auth', authRouter);
  return app;
};
