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
