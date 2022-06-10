import React, { MouseEventHandler, useMemo } from 'react';
import { GiMicrophone } from 'react-icons/gi';
import { BiCalendarAlt, BiComment } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Song } from '../../../../shared/types';
import { ElbumImage, ArtistImage } from '../common/image';

const CardBlock = styled(Link)<{ isliked: string }>`
  height: 20rem;
  box-sizing: border-box;
  border: 1.4px solid ${(p) => p.theme.palette.border};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  text-decoration: none;

  .header {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    ${(p) => p.theme.typography.title}
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    ${(p) => p.theme.typography.caption}

    .description {
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 0.4rem;
    }

    .link {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(p) => p.theme.typography.caption}

    & > div {
      display: flex;
      gap: 0.4rem;
    }

    .heart {
      svg {
        ${(p) => p.isliked === 'true' && 'color: #fc03c2;'}
      }

      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
    }
  }
`;

type CardProps = {
  song: Song;
  isLiked: boolean;
  handleLike: MouseEventHandler;
};

function Card({ song, isLiked, handleLike }: CardProps) {
  const heartsCount = useMemo(
    () => song.hearts.length + Number(isLiked),
    [isLiked]
  );

  return (
    <CardBlock to={`/song/${song.id}`} isliked={String(isLiked)}>
      <div className='header'>
        <ElbumImage imageUrl={song.songArtImageUrl} />
        <div>{song.title}</div>
      </div>
      <div className='content'>
        <div className='description'>{song.fullTitle}</div>
        <div className='link'>
          <>
            <GiMicrophone />
            {song.primaryArtist.name}
            <ArtistImage imageUrl={song.primaryArtist.imageUrl} />
          </>
        </div>
      </div>
      <div className='footer'>
        <div className='heart' onClick={handleLike}>
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          {heartsCount}
        </div>
        <div>
          <BiComment />
          {song.comments.length}
        </div>
        <div>
          <BiCalendarAlt />
          {song.releaseDateForDisplay ?? 'Not Found'}
        </div>
      </div>
    </CardBlock>
  );
}

export default Card;
