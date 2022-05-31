import express, { Express } from 'express';
import mongoose from 'mongoose';
import { pipe, pipeWith, andThen, curry } from 'ramda';
import { handleMiddlewares } from './handleMiddlewares';
import { handleRoutes } from './handleRoutes';

const buildStartApp = curry((port: number, host: string, app: Express) =>
  app.listen(port, host, () =>
    console.log(`server is listening on port ${port}`)
  )
);

export const startApp = buildStartApp(parseInt(process.env.PORT || '3001', 10))(
  process.env.HOST || 'localhost'
);

export const setupApp = pipe(handleMiddlewares, handleRoutes);

const connectDB = async () =>
  await mongoose.connect(process.env.MONGO_URI || '');

const createApp = () => Promise.resolve(express());

export const createConnection = pipeWith(andThen)([connectDB, createApp]);
