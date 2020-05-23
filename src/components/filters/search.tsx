import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import Input from '../common/input';
import searchState from '../../recoil/search-state';

export default function Search() {
  const [search, setSearch] = useRecoilState(searchState);

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
