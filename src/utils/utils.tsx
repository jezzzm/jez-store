import { Product } from './types';
import { TagsInterface } from '../components/tags';

export const flattenAndSortTags = (products: Product[]) => {
  const flattened = products.flatMap((product) => product.tags);

  return Array.from(new Set(flattened))
    .sort()
    .map((tag) => tag.toLowerCase());
};

export const productTagsAsObject = (
  ownTags: string[],
  allTags: TagsInterface,
) => {
  let productTags: TagsInterface = {};
  let sorted = [...ownTags.sort()];
  sorted.forEach((tag) => {
    productTags[tag] = allTags[tag];
  });
  return productTags;
};
