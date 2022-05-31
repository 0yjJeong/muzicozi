import path from 'path';
import { pipe } from 'ramda';
import { setupApp, createConnection, startApp } from './service';

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: path.join(__dirname, '..', '.env.development'),
  });
}

createConnection().then(pipe(setupApp, startApp));
