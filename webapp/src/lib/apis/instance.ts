import axios from 'axios';
import { get } from '../utils';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST,
  timeout: 30000,
  headers: { authorization: `Bearer ${get('token')}` },
});
