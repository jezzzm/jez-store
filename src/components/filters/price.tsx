import React, { useState, ChangeEvent } from 'react';
import Input from '../common/input';
import { isValidPrice } from '../../utils/utils';
import { PriceError } from '../../utils/types';

export type PriceRange = {
  min: number;
  max: number;
};

type PriceProps = {
  price: PriceRange;
  onPriceChange: CallableFunction;
};

const INITIAL_STATE: PriceError = { min: null, max: null };

export default function Price({ price, onPriceChange }: PriceProps) {
  const [error, setError] = useState(INITIAL_STATE);

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const asNumber = Number(event.target.value);
    const isMin = event.target.name === 'min';

    if (isMin) {
      if (isValidPrice(asNumber, price.max, true)) {
        // valid Min
        setError((prev) => ({
          ...prev,
          min: null,
        }));
      } else {
        // invalid Min
        setError((prev) => ({
          ...prev,
          min: 'Invalid min price entered',
        }));
      }
    } else {
      // isMax
      if (isValidPrice(asNumber, price.min, false)) {
        // valid Max
        setError((prev) => ({
          ...prev,
          max: null,
        }));
      } else {
        // invalid Max
        setError((prev) => ({
          ...prev,
          max: 'Invalid max price entered',
        }));
      }
    }

    onPriceChange(event.target.name, Number(event.target.value));
  };
  return (
    <div className="flex" aria-label="Product Price Filter">
      <Input
        placeholder="0"
        label="min price"
        name="min"
        type="number"
        value={String(price.min)}
        onInputChange={handlePriceChange}
        extraClasses="max-w-l"
        hasError={!!error.min}
      />
      <Input
        placeholder="any"
        label="max price"
        name="max"
        type="number"
        value={String(price.max)}
        onInputChange={handlePriceChange}
        extraClasses="max-w-l"
        hasError={!!error.min}
      />
    </div>
  );
}
