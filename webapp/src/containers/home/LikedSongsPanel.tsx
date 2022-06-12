import React from 'react';
import { find, propEq } from 'ramda';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Panel, LikedSong } from '../../components/home';
import { getLikedSongs, unlikeSong } from '../../lib/apis';
import { MyHeartContext } from './context';

export function LikedSongsPanel() {
  const queryClient = useQueryClient();
  const { data: likedSongs } = useQuery('liked-songs', getLikedSongs);

  const unlikeSongMutation = useMutation(unlikeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('my-hearts');
    },
  });

  return (
    <MyHeartContext.Consumer>
      {(myHearts) => {
        const filteredLinkedSongs = likedSongs?.filter(
          (song) => !!find(propEq('songId', song.id))(myHearts ?? [])
        );
        return (
          <Panel title='Songs you like'>
            {filteredLinkedSongs && filteredLinkedSongs.length ? (
              <>
                {filteredLinkedSongs.map((song) => {
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
            ) : (
              <li className='message'>No Songs to Display.</li>
            )}
          </Panel>
        );
      }}
    </MyHeartContext.Consumer>
  );
}

export default LikedSongsPanel;
