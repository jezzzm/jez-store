import { useState, useEffect } from 'react';
import { checkPriceForErrors } from '../utils/utils';
import { PriceError, PriceProps, PriceRange } from '../utils/types';

const INITIAL_PRICE: PriceRange = { min: 0, max: 0 };
const INITIAL_PRICE_ERRORS: PriceError = { min: [], max: [] };

export default function usePriceFilter(): PriceProps {
  const [price, setPrice] = useState(INITIAL_PRICE);
  const [priceErrors, setPriceErrors] = useState(INITIAL_PRICE_ERRORS);

  useEffect(() => {
    const newErrors = checkPriceForErrors(price.min, price.max);

    setPriceErrors(newErrors);
  }, [price]);

  const resetPrice = () => {
    setPrice(INITIAL_PRICE);
    setPriceErrors(INITIAL_PRICE_ERRORS);
  };

  const onPriceChange = (name: string, newPrice: number) => {
    setPrice((oldPrice: PriceRange) => ({
      ...oldPrice,
      [name]: newPrice,
    }));
  };

  return { price, onPriceChange, priceErrors, resetPrice };
}
