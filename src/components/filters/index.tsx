import React from 'react';
import Search from './search';
import Price from './price';
import Tags from '../common/tags';
import Button from '../common/button';
import { PriceError, PriceRange } from '../../utils/types';
import useSelectedTags from '../../hooks/use-selected-tags';

type FilterProps = {
  price: PriceRange;
  onPriceChange: CallableFunction;
  resetFilters: CallableFunction;
  priceErrors: PriceError;
};

export default function Filters({
  resetFilters,
  price,
  onPriceChange,
  priceErrors,
}: FilterProps) {
  const [tags, toggleTag] = useSelectedTags();
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
