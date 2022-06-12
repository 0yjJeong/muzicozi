import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const SongProfileSkeletonBlock = styled.div`
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  span {
    margin-top: 1rem;
  }
`;

function SongProfileSkeleton() {
  return (
    <SongProfileSkeletonBlock>
      <Skeleton
        width='12.5rem'
        height='12.5rem'
        borderRadius='0.3rem'
        style={{ marginTop: 0 }}
      />
      <Skeleton height='2.8rem' />
      <Skeleton height='2rem' />
      <Skeleton height='1.6rem' count={2} />
      <Skeleton width='8rem' height='8rem' borderRadius='0.3rem' />
    </SongProfileSkeletonBlock>
  );
}

export default SongProfileSkeleton;
