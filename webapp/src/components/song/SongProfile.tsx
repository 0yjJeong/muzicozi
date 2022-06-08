import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Song } from '../../../../shared/types';
import { ProfileImage } from '../card/CardImage';

const ProfileBlock = styled.div`
  text-align: center;

  & > * {
    margin: auto;
    margin-top: 1rem;
  }

  .title {
    ${(p) => p.theme.typography.head1}
  }

  .artist {
    ${(p) => p.theme.typography.title}
  }

  .description {
    ${(p) => p.theme.typography.caption}
  }
`;

type SongProfileProps = {
  song: Song;
  children?: ReactElement | ReactElement[];
};

function SongProfile({ song, children }: SongProfileProps) {
  return (
    <ProfileBlock>
      <ProfileImage imageUrl={song.songArtImageUrl} />
      <div className='title'>{song.title}</div>
      <div className='artist'>
        <span>By {song.primaryArtist.name}</span>
      </div>
      <div className='description'>
        <div>{song.fullTitle}</div>
        <div>{song.releaseDateForDisplay}</div>
      </div>
      {children}
    </ProfileBlock>
  );
}

export default SongProfile;
