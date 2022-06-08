import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SearchResult from '../../components/search/SearchResult';
import { search } from '../../lib/queries/song';

function SearchResultContainer() {
  const { q } = useParams<{ q: string }>();

  const { data } = useQuery(['search', q], search);

  return <SearchResult searched={data} />;
}

export default SearchResultContainer;
