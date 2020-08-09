import { TagsInterface, Product } from '../utils/types';

export const flattenAndSortTags = (products: Product[]) => {
  const flattened = products.flatMap((product) => product.tags);

  return flattened.sort().map((tag) => tag.toLowerCase());
};

// export const productTagsAsObject: TagsInterface = (
//   ownTags: string[],
//   allTags: TagsInterface,
// ) => {
//   let productTags = {};
//   let sorted = [...ownTags.sort()];
//   sorted.forEach((tag) => {
//     productTags[tag] = allTags[tag] || {};
//   });
//   return productTags;
// };

export const getTagsFromProducts = (products: Product[]) => {
  const flattenedTags: string[] = flattenAndSortTags(products);
  return flattenedTags.reduce((acc: TagsInterface, tag) => {
    if (acc[tag]) {
      acc[tag]++;
    } else {
      acc[tag] = 1;
    }
    return acc;
  }, {});
};
