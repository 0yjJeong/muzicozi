import { createContext } from 'react';
import { Heart } from '../../../types';

export const MyHeartContext = createContext<Heart[]>([]);
