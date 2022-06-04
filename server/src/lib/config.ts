import path from 'path';

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../..', '.env') });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: path.join(__dirname, '../..', '.env.development'),
  });
}

const config = {
  HOST: process.env.HOST || 'localhost',
  PORT: parseInt(process.env.PORT || '3001', 10),

  MONGO_URI: process.env.MONGO_URI || '',

  ORIGIN: process.env.ORIGIN || 'localhost:3000',

  GENIUS_API_HOST: process.env.GENIUS_API_HOST || '',
  GENIUS_API_KEY: process.env.GENIUS_API_KEY || '',

  SECRET_KEY: process.env.SECRET_KEY || 'secretkey',
};

export default config;
