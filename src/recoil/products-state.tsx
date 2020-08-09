import { atom, selector } from 'recoil';
import { Product } from '../utils/types';
import { flattenAndSortTags } from '../utils/tags';

const productsState = atom<Product[]>({
  key: 'productsState',
  default: [],
});

export const productTags = selector({
  key: 'productTags',
  get: ({ get }) => flattenAndSortTags(get(productsState)),
});

export default productsState;
