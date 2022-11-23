import { Express } from 'express';
import { songRouter, authRouter, commentRouter, meRouter } from '../routes';

export const handleRoutes = (app: Express) => {
  app.use('/song', songRouter);
  app.use('/auth', authRouter);
  app.use('/comment', commentRouter);
  app.use('/me', meRouter);
  return app;
};
