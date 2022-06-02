import React, { ReactElement } from 'react';
import styled from 'styled-components';

type PageProps = {
  children: ReactElement;
};

export function Page({ children }: PageProps) {
  return <PageStyle>{children}</PageStyle>;
}

const PageStyle = styled.div`
  height: 100%;
  overflow: auto;
  background: ${(p) => p.theme.palette.background.default};
`;
