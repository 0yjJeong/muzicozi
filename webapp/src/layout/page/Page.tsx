import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ThemeForSkeleton = styled(SkeletonTheme).attrs((p) => ({
  baseColor: p.theme.palette.border,
  highlightColor: '#184060',
}))`
  height: 20rem;
  background: #0f283d;
`;

const PageStyle = styled.div`
  height: 100%;
  overflow: auto;
  background: ${(p) => p.theme.palette.background.default};
`;

type PageProps = {
  children: ReactElement;
};

export function Page({ children }: PageProps) {
  return (
    <ThemeForSkeleton>
      <PageStyle>{children}</PageStyle>
    </ThemeForSkeleton>
  );
}
