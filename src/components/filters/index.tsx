import React from 'react';
import Search from './search';
import Price from './price';
import Tags from '../common/tags';
import Button from '../common/button';
import { TagsInterface, PriceError, PriceRange } from '../../utils/types';

type FilterProps = {
  tags: TagsInterface;
  toggleTag: CallableFunction;
  price: PriceRange;
  onPriceChange: CallableFunction;
  resetFilters: CallableFunction;
  priceErrors: PriceError;
};

export default function Filters({
  tags,
  toggleTag,
  resetFilters,
  price,
  onPriceChange,
  priceErrors,
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
      <Price
        price={price}
        onPriceChange={onPriceChange}
        priceErrors={priceErrors}
      />
      <Tags
        tags={tags}
        onToggle={(name: string) => toggleTag(name)}
        ariaLabel="Product Tag Filters"
      />
    </div>
  );
}
