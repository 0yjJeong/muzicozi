import React from 'react';
import styled, { css } from 'styled-components';

export const cardListStyle = css`
  display: grid;
  grid-gap: 1.6rem;
  margin-bottom: 1.6rem;
  grid-template-columns: repeat(2, 1fr);

  ${(p) => css`
    ${p.theme.media.large} {
      grid-template-columns: repeat(3, 1fr);
    }
  `};

  ${(p) => css`
    ${p.theme.media.xlarge} {
      grid-template-columns: repeat(4, 1fr);
    }
  `};
`;

const CardList = styled.div`
  ${cardListStyle}
`;

export default CardList;
