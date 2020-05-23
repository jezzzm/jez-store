import React, { ChangeEvent } from 'react';
import Input from '../common/input';
import { PriceProps } from '../../utils/types';

export default function Price({
  price,
  onPriceChange,
  priceErrors,
}: PriceProps) {
  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPriceChange(event.target.name, Number(event.target.value));
  };

  return (
    <div className="flex" aria-label="Product Price Filter">
      <Input
        placeholder="0"
        label="min price"
        name="min"
        type="number"
        value={String(price.min || '')}
        onInputChange={handlePriceChange}
        extraClasses="max-w-l"
        hasError={priceErrors.min.length > 0}
      />
      <Input
        placeholder="any"
        label="max price"
        name="max"
        type="number"
        value={String(price.max || '')}
        onInputChange={handlePriceChange}
        extraClasses="max-w-l"
        hasError={priceErrors.max.length > 0}
      />
    </div>
  );
}
