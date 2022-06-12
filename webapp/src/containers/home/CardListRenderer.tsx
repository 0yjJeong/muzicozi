import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { find, identity, propEq, times } from 'ramda';
import { Card, CardList } from '../../components/home';
import { getArtistSongs, likeSong, unlikeSong } from '../../lib/apis/song';
import LikedSongsPanel from './LikedSongsPanel';
import { getMyHearts } from '../../lib/apis';
import { MyHeartContext } from './context';
import HistoryPanel from './HistoryPanel';
import CardSkeleton from '../../components/home/CardSkeleton';

function CardListRenderer() {
  const queryClient = useQueryClient();
  const { data: myHearts } = useQuery('my-hearts', getMyHearts);
  const { data: songs } = useQuery(
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

  return (
    <MyHeartContext.Provider value={myHearts ?? []}>
      <CardList HeartPanel={LikedSongsPanel} SearchHistoryPanel={HistoryPanel}>
        {songs
          ? songs.map((song) => {
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
            })
          : times(identity, 20).map((index) => {
              return <CardSkeleton key={index} />;
            })}
      </CardList>
    </MyHeartContext.Provider>
  );
}

export default CardListRenderer;
