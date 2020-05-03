import React from 'react';
import Input from '../common/input';

type SearchProps = {
  onSearchInput: CallableFunction;
  searchTerm: string;
};

export default function Search({ onSearchInput, searchTerm }: SearchProps) {
  return (
    <Input
      label="Search"
      placeholder="Search for anything..."
      onInputChange={onSearchInput}
      value={searchTerm}
    />
  );
}
