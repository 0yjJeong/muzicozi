import React, { ReactElement } from 'react';
import styled from 'styled-components';

const PanelBlock = styled.div`
  height: 250px;
  overflow: hidden;
  padding: 1.6rem;

  .title {
    ${(p) => p.theme.typography.title}
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
    border-bottom: 2px solid ${(p) => p.theme.palette.highlight};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: auto;
    height: calc(100% - 42px);

    .message {
      ${(p) => p.theme.typography.caption}
    }

    & > * {
      margin-top: 1rem;
    }
  }
`;

type CategoryProps = {
  title: string;
  children: ReactElement | ReactElement[];
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
