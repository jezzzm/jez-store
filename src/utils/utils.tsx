import {
  Product,
  FilterTags,
  TextMatch,
  TagsInterface,
  PriceError,
  PriceRange,
} from './types';

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
  price: PriceRange,
  priceErrors: PriceError,
) => {
  // tags
  const hasSelectedTags = tags.selected.every((tagName) =>
    product.tags.includes(tagName),
  );
  const isTagMatch = hasSelectedTags || !tags.selected.length;

  //search
  const loweredSearch = search.toLowerCase();
  const isSearchMatch = !!search.length
    ? product.name.toLowerCase().includes(loweredSearch) ||
      product.description.toLowerCase().includes(loweredSearch) ||
      product.tags.some((tag) => tag.includes(loweredSearch))
    : true;

  // price
  let isPriceMatch = true;
  if (!(priceErrors.min.length || priceErrors.max.length)) {
    const productPrice = Number(product.price);
    if (price.max) {
      isPriceMatch = price.min <= productPrice && price.max >= productPrice;
    } else {
      isPriceMatch = price.min <= productPrice;
    }
  }

  return isTagMatch && isSearchMatch && isPriceMatch;
};

export const checkPriceForErrors = (min: number, max: number): PriceError => {
  let errors: PriceError = { min: [], max: [] };
  if (min < 0) {
    errors.min.push('Min price cannot be less than zero');
  }
  if (max < 0) {
    errors.max.push('Max price cannot be less than zero');
  }
  if (max < min && max !== 0) {
    errors.min.push('Min price cannot be greater than max price');
    errors.max.push('Max price cannot be less than min price');
  }
  return errors;
};
