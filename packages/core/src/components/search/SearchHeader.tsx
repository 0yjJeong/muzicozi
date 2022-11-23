import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiX } from 'react-icons/hi';
import LogoIcon from '../../layout/header/LogoIcon';

const SearchHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    ${(p) => p.theme.typography.body}
    font-size: 2.2rem;
  }
`;

function SearchHeader() {
  const navigate = useNavigate();
  return (
    <SearchHeaderBlock>
      <LogoIcon />
      <HiX onClick={() => navigate(-1)} />
    </SearchHeaderBlock>
  );
}

export default SearchHeader;
