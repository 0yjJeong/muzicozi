import React, { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import { Search, SearchInput } from '../../components/search';
import { Outlet, useNavigate } from 'react-router-dom';

function SearchContainer() {
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate(`/search/${e.target.value}`);
  };

  return (
    <Search>
      <SearchInput onChange={debounce(onChange, 350)} />
      <Outlet />
    </Search>
  );
}

export default SearchContainer;
