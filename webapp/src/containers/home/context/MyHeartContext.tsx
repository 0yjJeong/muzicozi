import { createContext } from 'react';
import { Heart } from '../../../../../shared/types';

export const MyHeartContext = createContext<Heart[]>([]);
