import React, { ReactElement } from 'react';
import styled from 'styled-components';

const CategoryBlock = styled.div`
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

function Category({ title, children }: CategoryProps) {
  return (
    <CategoryBlock>
      <div className='title'>{title}</div>
      <ul>{children}</ul>
    </CategoryBlock>
  );
}

export default Category;
