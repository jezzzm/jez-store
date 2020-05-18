import React, { ChangeEvent, useContext } from 'react';
import SearchContext from '../../context/search-context';
import Input from '../common/input';

export default function Search() {
  const [search, setSearch] = useContext(SearchContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Input
      label="Search"
      placeholder="Search products..."
      onInputChange={handleInputChange}
      value={search}
      ariaLabel="Product Keyword Search"
      extraClasses="w-full"
    />
  );
}
