import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { search } from '../../lib/apis';
import SearchResult from '../../components/search/SearchResult';

function SearchResultContainer() {
  const { q } = useParams<{ q: string }>();

  const { data } = useQuery(['search', q], search);

  return <SearchResult searched={data} />;
}

export default SearchResultContainer;
