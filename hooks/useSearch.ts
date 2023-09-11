import { useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');

  const isEmpty = search?.length == 0;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return({
    search,
    handleSearch,
    isEmpty
  })
}