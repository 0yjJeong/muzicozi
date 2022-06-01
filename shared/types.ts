export type User = {
  id: string;
  nickname: string;
  email: string;
  password: string;
};

export type Heart = {
  id: string;
  userId: string;
  songId: string;
  createdAt: Date;
};

export type Comment = {
  id: string;
  userId: string;
  songId: string;
  text: string;
  replyTo: string;
  createdAt: Date;
};

export type Artist = {
  id: number;
  imageUrl: string;
  name: number;
};

export type Song = {
  id: number;
  title: string;
  fullTitle: string;
  songArtImageUrl: string;
  releaseDateForDisplay: string;
  primaryArtist: Artist;
  hearts: Heart[];
  comments: Comment[];
};
