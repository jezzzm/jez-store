import React from 'react';
import Search from './search';
import Price, { PriceRange } from './price';
import Tags, { TagsInterface } from '../common/tags';
import Button from '../common/button';

type FilterProps = {
  tags: TagsInterface;
  toggleTag: CallableFunction;
  searchTerm: string;
  onSearchInput: CallableFunction;
  price: PriceRange;
  onPriceChange: CallableFunction;
  resetFilters: CallableFunction;
};

export default function Filters({
  tags,
  toggleTag,
  onSearchInput,
  resetFilters,
  searchTerm,
  price,
  onPriceChange,
}: FilterProps) {
  return (
    <div>
      <div className="flex justify-between mb-4 items-end">
        <Search onSearchInput={onSearchInput} searchTerm={searchTerm} />
        <Price price={price} onPriceChange={onPriceChange} />
        <Button
          text="Reset Filters"
          type="info"
          size="md"
          onClick={resetFilters}
        />
      </div>

      <Tags tags={tags} onToggle={(name: string) => toggleTag(name)} />
    </div>
  );
}
