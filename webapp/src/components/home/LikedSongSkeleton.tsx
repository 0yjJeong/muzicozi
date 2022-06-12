import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LikedSongSkeletonBlock = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 4.5rem;

  & > span:nth-child(1) {
    width: 51px;
  }

  & > span:nth-child(2) {
    width: 100%;
  }

  & > span:nth-child(3) {
    width: 25px;
  }
`;

function LikedSongSkeleton() {
  return (
    <LikedSongSkeletonBlock>
      <Skeleton height='4rem' borderRadius='0.3rem' />
      <Skeleton height='2rem' />
      <Skeleton height='2rem' borderRadius='0.3rem' />
    </LikedSongSkeletonBlock>
  );
}

export default LikedSongSkeleton;
