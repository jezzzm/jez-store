export type ExcludesUndefined = <T>(x: T | undefined) => x is T;

export interface Product {
  name: string;
  id: number;
  description: string;
  tags: string[];
  image: string;
  price: string;
}
