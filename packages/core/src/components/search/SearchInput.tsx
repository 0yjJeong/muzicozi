import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchInputBlock = styled.div`
  position: relative;
  background: ${(p) => p.theme.palette.border};
  padding: 1.4rem 2.4rem;

  span {
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    height: 16px;
    color: ${(p) => p.theme.palette.icon};
  }

  input {
    padding-left: 3rem;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    line-height: 4.2rem;
    ${(p) => p.theme.typography.body};
  }
`;

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {}

function SearchInput({ ...rest }: SearchInputProps) {
  return (
    <SearchInputBlock>
      <span>
        <FaSearch />
      </span>
      <input {...rest} />
    </SearchInputBlock>
  );
}

export default SearchInput;
