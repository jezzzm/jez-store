// for ts to be happy when .filter(Boolean) is used to clear up .map()
export type ExcludesUndefined = <T>(x: T | undefined) => x is T;

export interface Product {
  name: string;
  id: number;
  description: string;
  tags: string[];
  image: string;
  price: string;
}

export interface TextMatch {
  text: string;
  match: boolean;
}
export interface TagsInterface {
  [key: string]: boolean;
}

export interface FilterTags {
  all: TagsInterface;
  selected: string[];
}

export interface PriceError {
  min: (string | undefined)[];
  max: (string | undefined)[];
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface PriceProps {
  price: PriceRange;
  onPriceChange: CallableFunction;
  priceErrors: PriceError;
  resetPrice?: CallableFunction;
}
