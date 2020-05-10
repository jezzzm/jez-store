import { Product, FilterTags, TextMatch, TagsInterface } from './types';

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

export const findTextMatches = (
  content: string,
  search: string,
): TextMatch[] => {
  const noMatch = [{ text: content, match: false }];

  if (!search.length) {
    return noMatch;
  }

  const loweredContent = content.toLowerCase();
  const loweredSearch = search.toLowerCase();
  const matchPosition = loweredContent.indexOf(loweredSearch);

  if (matchPosition >= 0) {
    const endIndex = matchPosition + search.length;
    const matched = content.slice(matchPosition, endIndex);
    const lastUnmatched = content.slice(endIndex);

    if (matchPosition === 0) {
      // match begins at start of content
      return [
        { text: matched, match: true },
        { text: lastUnmatched, match: false },
      ];
    } else {
      // match begins mid-string
      const firstUnmatched = content.slice(0, matchPosition);
      return [
        { text: firstUnmatched, match: false },
        { text: matched, match: true },
        { text: lastUnmatched, match: false },
      ];
    }
  } else {
    // = -1 if no match for substring
    return noMatch;
  }
};

export const isMatchingProduct = (
  product: Product,
  tags: FilterTags,
  search: string,
) => {
  const hasSearchTermEntered = !!search.length;
  const loweredSearch = search.toLowerCase();

  const hasSelectedTags = tags.selected.every((tagName) =>
    product.tags.includes(tagName),
  );

  const noTagFilterOrMatchesTag = hasSelectedTags || !tags.selected.length;

  const hasMatchingSearchTerm =
    hasSearchTermEntered &&
    (product.name.toLowerCase().includes(loweredSearch) ||
      product.description.toLowerCase().includes(loweredSearch) ||
      product.tags.some((tag) => tag.includes(loweredSearch)));

  const isMatchingProduct = hasSearchTermEntered
    ? hasMatchingSearchTerm && noTagFilterOrMatchesTag
    : noTagFilterOrMatchesTag;

  return isMatchingProduct;
};
