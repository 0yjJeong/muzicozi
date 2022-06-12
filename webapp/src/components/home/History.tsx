import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const HistoryBlock = styled.li`
  ${(p) => p.theme.typography.caption}
  display: flex;

  .keyword {
    font-weight: bold;
    flex: 1 1 auto;
    margin-left: 0.6rem;
  }
`;

type HistoryProps = {
  keyword: string;
  dateForDisplay: string;
};

function History({ keyword, dateForDisplay }: HistoryProps) {
  return (
    <HistoryBlock>
      <FiSearch />
      <div className='keyword'>{keyword}</div>
      <div>{dateForDisplay}</div>
    </HistoryBlock>
  );
}

export default History;
