import { Express } from 'express';
import { songRouter, authRouter, commentRouter } from '../routes';

export const handleRoutes = (app: Express) => {
  app.use('/song', songRouter);
  app.use('/auth', authRouter);
  app.use('/comment', commentRouter);
  return app;
};
