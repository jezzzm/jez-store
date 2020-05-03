import React, { ChangeEvent } from 'react';
import Input from '../common/input';

export type PriceRange = {
  min: number;
  max: number;
};

type PriceProps = {
  price: PriceRange;
  onPriceChange: CallableFunction;
};
export default function Price({ price, onPriceChange }: PriceProps) {
  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    onPriceChange(event.target.name, Number(event.target.value));
  };
  return (
    <div className="flex justify-evenly">
      <Input
        placeholder="0"
        label="min price"
        name="min"
        type="number"
        value={String(price.min)}
        onInputChange={handlePriceChange}
        extraClasses="mr-3"
      />
      <Input
        placeholder="any"
        label="max price"
        name="max"
        type="number"
        value={String(price.max)}
        onInputChange={handlePriceChange}
      />
    </div>
  );
}
