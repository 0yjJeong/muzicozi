import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import SearchHeader from './SearchHeader';

const SearchBlock = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  background: ${(p) => p.theme.palette.background.default};

  & > div {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 100%;
    margin: auto;
    margin-top: 1.6rem;

    & > * {
      margin-bottom: 1.6rem;
    }

    ${(p) => css`
      ${p.theme.media.large} {
        max-width: 1020px;
        padding: 0;
      }
    `};
  }
`;

interface SearchProps extends HTMLAttributes<HTMLDivElement> {}

function Search({ children, ...rest }: SearchProps) {
  return (
    <SearchBlock {...rest}>
      <div>
        <SearchHeader />
        {children}
      </div>
    </SearchBlock>
  );
}

export default Search;
