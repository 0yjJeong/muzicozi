import React from 'react';
import { useQuery } from 'react-query';
import { find, propEq } from 'ramda';
import Card from '../../components/home/Card';
import { CardList } from '../../components/home';
import { getArtistSongs } from '../../lib/apis/song';

function CardListRenderer() {
  const { isLoading, data: songs } = useQuery(
    ['artist-songs', { id: 16775 }],
    getArtistSongs,
    {
      retry: false,
    }
  );

  if (isLoading || !songs) return null;

  return (
    <CardList HeartPanel={() => <></>} SearchHistoryPanel={() => <></>}>
      {songs.map((song) => {
        const isLiked = !!find(propEq('songId', song.id))([]);
        return (
          <Card
            key={song.id}
            song={song}
            isLiked={isLiked}
            handleLike={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          />
        );
      })}
    </CardList>
  );
}

export default CardListRenderer;
