import { pipe } from 'ramda';
import { setupApp, createConnection, startApp } from './service';

createConnection().then(pipe(setupApp, startApp));
