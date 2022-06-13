import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { filter, find, identity, propEq, times } from 'ramda';
import { Card, CardList } from '../../components/home';
import { getArtistSongs, likeSong, unlikeSong } from '../../lib/apis/song';
import LikedSongsPanel from './LikedSongsPanel';
import { getMyHearts } from '../../lib/apis';
import { MyHeartContext } from './context';
import HistoryPanel from './HistoryPanel';
import CardSkeleton from '../../components/home/CardSkeleton';
import { useLogged } from '../../hooks/useLogged';
import { useNavigate } from 'react-router-dom';
import { Heart } from '../../../../shared/types';

function CardListRenderer() {
  const navigation = useNavigate();
  const queryClient = useQueryClient();
  const logged = useLogged();
  const { data: songs } = useQuery(
    ['artist-songs', { id: 16775 }],
    getArtistSongs
  );
  const { data: myHearts } = useQuery('my-hearts', getMyHearts, {
    enabled: !!logged,
    retry: false,
  });

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
              const hearts = filter(
                (heart: Heart) => heart.userId !== logged?.userId
              )(song.hearts);
              return (
                <Card
                  key={song.id}
                  song={song}
                  isLiked={isLiked}
                  hearts={hearts}
                  handleLike={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (logged) {
                      isLiked
                        ? unlikeSongMutation.mutate(song.id)
                        : likeSongMutation.mutate(song.id);
                    } else {
                      navigation('/login');
                    }
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
