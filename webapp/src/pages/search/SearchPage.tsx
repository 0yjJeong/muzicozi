import React from 'react';
import { Search } from '../../components/search';
import SearchContainer from '../../containers/search/SearchContainer';

function SearchPage() {
  return (
    <Search>
      <SearchContainer />
    </Search>
  );
}

export default SearchPage;
