import React, { ChangeEvent } from 'react';
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
      onInputChange={(event: ChangeEvent<HTMLInputElement>) =>
        onSearchInput(event.target.value.toLowerCase())
      }
      value={searchTerm}
    />
  );
}
