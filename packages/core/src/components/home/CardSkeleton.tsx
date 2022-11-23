import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Wrapper = styled.div`
  height: 16.8rem;
  background: #0f283d;
  padding: 1.6rem;

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span:nth-child(1) {
      width: 48px;
    }

    & > span:nth-child(2) {
      width: 100%;
    }
  }

  .content {
    span {
      & > * {
        margin-bottom: 1rem;
      }
    }
  }

  & > * {
    margin-bottom: 1.6rem;
  }
`;

function CardSkeleton() {
  return (
    <Wrapper>
      <div className='header'>
        <Skeleton height='4rem' borderRadius='0.3rem' />
        <Skeleton height='2rem' />
      </div>
      <div className='content'>
        <Skeleton count={3} height='2rem' />
      </div>
    </Wrapper>
  );
}

export default CardSkeleton;
