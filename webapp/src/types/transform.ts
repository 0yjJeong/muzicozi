import { Song, Comment, User } from '../../../shared/types';

export type Searched = Omit<
  Song,
  'fullTitle' | 'releaseDateForDisplay' | 'hearts' | 'comments'
>;

export interface DefaultComment extends Omit<Comment, 'user'> {
  user: User;
}
