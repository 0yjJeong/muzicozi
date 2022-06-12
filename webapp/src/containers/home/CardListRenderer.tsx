import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { find, propEq } from 'ramda';
import { Card, CardList } from '../../components/home';
import { getArtistSongs, likeSong, unlikeSong } from '../../lib/apis/song';
import LikedSongsPanel from './LikedSongsPanel';
import { getMyHearts } from '../../lib/apis';
import { MyHeartContext } from './context';
import HistoryPanel from './HistoryPanel';

function CardListRenderer() {
  const queryClient = useQueryClient();
  const { data: myHearts } = useQuery('my-hearts', getMyHearts);
  const { isLoading, data: songs } = useQuery(
    ['artist-songs', { id: 16775 }],
    getArtistSongs,
    {
      retry: false,
      enabled: !!myHearts,
    }
  );

  const likeSongMutation = useMutation(likeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('my-hearts');
      queryClient.invalidateQueries('liked-songs');
    },
  });
  const unlikeSongMutation = useMutation(unlikeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('my-hearts');
    },
  });

  if (isLoading || !songs) return null;

  return (
    <MyHeartContext.Provider value={myHearts ?? []}>
      <CardList HeartPanel={LikedSongsPanel} SearchHistoryPanel={HistoryPanel}>
        {songs.map((song) => {
          const isLiked = !!find(propEq('songId', song.id))(myHearts ?? []);
          return (
            <Card
              key={song.id}
              song={song}
              isLiked={isLiked}
              handleLike={(e) => {
                e.stopPropagation();
                e.preventDefault();
                isLiked
                  ? unlikeSongMutation.mutate(song.id)
                  : likeSongMutation.mutate(song.id);
              }}
            />
          );
        })}
      </CardList>
    </MyHeartContext.Provider>
  );
}

export default CardListRenderer;
