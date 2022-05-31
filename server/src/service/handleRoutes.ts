import { Express } from 'express';

export const handleRoutes = (app: Express) => {
  app.use('/user', (req, res) => {
    res.send('user');
  });
  app.use('/song', (req, res) => {
    res.send('song');
  });
  return app;
};
