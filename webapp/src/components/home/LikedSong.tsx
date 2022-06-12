import React, { MouseEventHandler, useRef } from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { LikedSongForDisplay } from '../../types/transform';
import { ElbumImage } from '../common/image';
import useHover from './hooks/useHover';

const LikedSongBlock = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  .song-title {
    flex: 1 1 auto;
    ${(p) => p.theme.typography.caption}
  }

  .song-heart {
    color: #fc03c2;
    padding-right: 0.3rem;

    svg {
      font-size: 1.8rem;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
`;

type LikedSongProps = {
  likedSong: LikedSongForDisplay;
  onUnlikeSong: MouseEventHandler;
};

function LikedSong({ likedSong, onUnlikeSong }: LikedSongProps) {
  const heartRef = useRef<HTMLDivElement>(null);
  const [hover] = useHover(heartRef.current);

  const heartFragment = hover ? <AiOutlineHeart /> : <AiFillHeart />;

  return (
    <LikedSongBlock>
      <ElbumImage imageUrl={likedSong.songArtImageUrl} />
      <div className='song-title'>{likedSong.title}</div>
      <div ref={heartRef} className='song-heart' onClick={onUnlikeSong}>
        {heartFragment}
      </div>
    </LikedSongBlock>
  );
}

export default LikedSong;
