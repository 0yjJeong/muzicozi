import React from 'react';
import styled from 'styled-components';

type CardImageProps = {
  imageUrl: string;
};

const Image = styled.div<CardImageProps>`
  background-image: url(${(p) => p.imageUrl});
  background-size: cover;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const ElbumImage = styled(Image)`
  width: 4.5rem;
  border-radius: 2px;
`;

export const ArtistImage = styled(Image)`
  width: 2.4rem;
  border-radius: 50%;
`;
