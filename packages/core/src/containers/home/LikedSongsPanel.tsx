import React from 'react';
import { find, propEq } from 'ramda';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Panel, LikedSong } from '../../components/home';
import { getLikedSongs, unlikeSong } from '../../lib/apis';
import { MyHeartContext } from './context';
import LikedSongSkeleton from '../../components/home/LikedSongSkeleton';
import { useLogged } from '../../hooks/useLogged';

export function LikedSongsPanel() {
  const queryClient = useQueryClient();
  const logged = useLogged();
  const { isLoading, data: likedSongs } = useQuery(
    'liked-songs',
    getLikedSongs,
    { enabled: !!logged, refetchOnWindowFocus: false }
  );

  const unlikeSongMutation = useMutation(unlikeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('my-hearts');
    },
  });

  return (
    <MyHeartContext.Consumer>
      {(myHearts) => {
        return (
          <Panel title='Songs you like'>
            {!myHearts.length ? (
              <li className='message'>No Songs to Display.</li>
            ) : isLoading || !likedSongs ? (
              <>
                {myHearts.map((heart) => (
                  <LikedSongSkeleton key={heart.id} />
                ))}
              </>
            ) : (
              <>
                {likedSongs!.map((song) => {
                  if (!!find(propEq('songId', song.id))(myHearts ?? [])) {
                    return (
                      <LikedSong
                        key={song.id}
                        likedSong={song}
                        onUnlikeSong={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          unlikeSongMutation.mutate(song.id);
                        }}
                      />
                    );
                  }
                })}
              </>
            )}
          </Panel>
        );
      }}
    </MyHeartContext.Consumer>
  );
}

export default LikedSongsPanel;
