import React from 'react';
import { useQuery } from 'react-query';
import { SongProfile } from '../../components/song';
import { getSong } from '../../lib/apis';
import HeartBoxContainer from './HeartBoxContainer';
import { useId } from './hooks';

function SongView() {
  const { songId } = useId();

  const { data: song, isLoading } = useQuery(['song', songId], getSong, {
    retry: false,
  });

  if (isLoading || !song) return null;

  return (
    <SongProfile song={song}>
      <HeartBoxContainer songId={songId} initialHearts={song.hearts} />
    </SongProfile>
  );
}

export default SongView;
