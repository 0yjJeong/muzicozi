import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Searched } from '../../types/transform';
import { SearchImage } from '../card/CardImage';

type SearchResultProps = {
  searched: Searched[] | undefined;
};

function SearchResult({ searched }: SearchResultProps) {
  if (!searched) return null;
  return (
    <Wrapper>
      {searched.map((song) => (
        <Link key={song.id} to={`/song/${song.id}`}>
          <Element>
            <div className='left'>
              <SearchImage imageUrl={song.songArtImageUrl} />
            </div>
            <div className='right'>
              <div className='title'>{song.title}</div>
              <div className='artist'>{song.primaryArtist.name}</div>
            </div>
          </Element>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 2.4rem;
  margin-top: 1rem;
  padding: 2.4rem;
  background: ${(p) => p.theme.palette.border};

  ${(p) => css`
    ${p.theme.media.medium} {
      grid-template-columns: repeat(2, 1fr);
    }
  `};
`;

const Element = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  .right {
    .title {
      ${(p) => p.theme.typography.body};
    }

    .artist {
      ${(p) => p.theme.typography.caption};
    }
  }
`;

export default SearchResult;
