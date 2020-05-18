import React from 'react';
import Search from './search';
import Price, { PriceRange } from './price';
import Tags from '../common/tags';
import Button from '../common/button';
import { TagsInterface } from '../../utils/types';

type FilterProps = {
  tags: TagsInterface;
  toggleTag: CallableFunction;
  price: PriceRange;
  onPriceChange: CallableFunction;
  resetFilters: CallableFunction;
};

export default function Filters({
  tags,
  toggleTag,
  resetFilters,
  price,
  onPriceChange,
}: FilterProps) {
  return (
    <div role="form" aria-label="Product Filters" className="flex flex-col">
      <div className="self-end">
        <Button
          text="Reset Filters"
          type="info"
          size="md"
          onClick={resetFilters}
        />
      </div>

      <Search />
      <Price price={price} onPriceChange={onPriceChange} />

      <Tags
        tags={tags}
        onToggle={(name: string) => toggleTag(name)}
        ariaLabel="Product Tag Filters"
      />
    </div>
  );
}
