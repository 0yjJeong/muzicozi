import React, { ComponentType, ReactElement } from 'react';
import { take, drop } from 'ramda';
import styled, { css } from 'styled-components';
import useOnResize from '../../hooks/useOnResize';

export const cardListStyle = css`
  display: grid;
  grid-gap: 1.6rem;
  margin-bottom: 1.6rem;
  grid-template-columns: repeat(1, 1fr);
  max-width: 1020px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${(p) => css`
    ${p.theme.media.small} {
      grid-template-columns: repeat(2, 1fr);
    }
  `};

  ${(p) => css`
    ${p.theme.media.large} {
      grid-template-columns: repeat(3, 1fr);
    }
  `};
`;

const CardListBlock = styled.div`
  ${cardListStyle}
`;

const Layout = styled.div`
  display: flex;
  gap: 1rem;

  .panels {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
`;

type CardListProps = {
  children: ReactElement[];
  HeartPanel: ComponentType;
  SearchHistoryPanel: ComponentType;
};

const CardList = ({
  children,
  HeartPanel,
  SearchHistoryPanel,
}: CardListProps) => {
  const [width] = useOnResize();

  const mobile = (
    <CardListBlock>
      {take(2, children)}
      <HeartPanel />
      {take(2)(drop(2, children))}
      <SearchHistoryPanel />
      {drop(4, children)}
    </CardListBlock>
  );

  const tablet = (
    <>
      <CardListBlock>{take(4, children)}</CardListBlock>
      <CardListBlock>
        <HeartPanel />
        <SearchHistoryPanel />
      </CardListBlock>
      <CardListBlock>{drop(4, children)}</CardListBlock>
    </>
  );

  const laptop = (
    <>
      <CardListBlock>{take(6, children)}</CardListBlock>
      <CardListBlock>
        <HeartPanel />
        {children[6]}
        <SearchHistoryPanel />
      </CardListBlock>
      <CardListBlock>{drop(7, children)}</CardListBlock>
    </>
  );

  const desktop = (
    <Layout>
      <CardListBlock>{children}</CardListBlock>
      <div className='panels'>
        <HeartPanel />
        <SearchHistoryPanel />
      </div>
    </Layout>
  );

  return (
    <>
      {width <= 490
        ? mobile
        : width <= 992
        ? tablet
        : width <= 1380
        ? laptop
        : desktop}
    </>
  );
};

export default CardList;
