import { Song, Comment, User } from '../../../shared/types';

export type Searched = Omit<
  Song,
  'fullTitle' | 'releaseDateForDisplay' | 'hearts' | 'comments'
>;

export type LikedSongForDisplay = {
  id: number;
  title: string;
  songArtImageUrl: string;
};

export interface DefaultComment extends Omit<Comment, 'user'> {
  user: User;
}
