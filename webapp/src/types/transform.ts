import { Song } from '../../../shared/types';

export type Searched = Omit<
  Song,
  'fullTitle' | 'releaseDateForDisplay' | 'hearts' | 'comments'
>;
