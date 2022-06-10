import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Song } from '../../../../shared/types';
import Card from './Card';
import { cardListStyle } from './CardList';

type ExpandedCardListProps = {
  songs: Song[];
  children?: ReactElement;
};

function ExpandedCardList({ songs, children }: ExpandedCardListProps) {
  return songs.length < 3 ? (
    <TwoColumn>
      <CellA>
        <Card song={songs[0]} />
      </CellA>
      <CellB>
        <Card song={songs[1]} />
      </CellB>
      <CellColumn>{children}</CellColumn>
    </TwoColumn>
  ) : (
    <ThreeColumn>
      <CellA>
        <Card song={songs[0]} />
      </CellA>
      <CellB>
        <Card song={songs[1]} />
      </CellB>
      <CellC>
        <Card song={songs[2]} />
      </CellC>
      <CellD>
        <Card song={songs[3]} />
      </CellD>
      <CellColumn>{children}</CellColumn>
    </ThreeColumn>
  );
}

const common = css`
  gap: 1.6rem;
  grid-auto-flow: column;
`;

const TwoColumn = styled.div`
  ${cardListStyle}
  ${common}
  grid-template-areas:
    'A COLUMN'
    'B COLUMN';
`;

const ThreeColumn = styled.div`
  ${cardListStyle}
  ${common}
  grid-template-areas:
    'A B COLUMN'
    'C D COLUMN';
`;

const CellA = styled.div`
  grid-area: A;
`;

const CellB = styled.div`
  grid-area: B;
`;

const CellC = styled.div`
  grid-area: C;
`;

const CellD = styled.div`
  grid-area: D;
`;

const CellColumn = styled.div`
  grid-area: COLUMN;
  max-height: calc(40rem - 1.6rem);
  padding: 1.6rem;
  border: 1.4px solid ${(p) => p.theme.palette.border};
`;

export default ExpandedCardList;
