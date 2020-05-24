import { TagsInterface, Product } from '../utils/types';

export const flattenAndSortTags = (products: Product[]) => {
  // TODO: need to remove same multiple tags from same product
  const flattened = products.flatMap((product) => product.tags);

  return flattened.sort().map((tag) => tag.toLowerCase());
};

export const productTagsAsObject = (
  ownTags: string[],
  allTags: TagsInterface,
) => {
  let productTags: TagsInterface = {};
  let sorted = [...ownTags.sort()];
  sorted.forEach((tag) => {
    productTags[tag] = allTags[tag] || {};
  });
  return productTags;
};

export const getTagsFromProducts = (products: Product[]) => {
  const flattenedTags: string[] = flattenAndSortTags(products);
  return flattenedTags.reduce((acc: TagsInterface, tag) => {
    if (acc[tag]) {
      acc[tag].count++;
    } else {
      acc[tag] = { selected: false, count: 1 };
    }
    return acc;
  }, {});
};
