import React, { ReactElement } from 'react';
import styled from 'styled-components';

const PanelBlock = styled.div`
  height: 100%;
  overflow: hidden;

  .title {
    ${(p) => p.theme.typography.title}
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: auto;
    height: 100%;
  }
`;

type CategoryProps = {
  title: string;
  children: ReactElement[];
};

function Panel({ title, children }: CategoryProps) {
  return (
    <PanelBlock>
      <div className='title'>{title}</div>
      <ul>{children}</ul>
    </PanelBlock>
  );
}

export default Panel;
