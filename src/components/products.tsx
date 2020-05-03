import React, { useState } from 'react';
import ProductCard from './product-card';
import Filters from './filters';
import { PriceRange } from './filters/price';
import { productTagsAsObject } from '../utils/utils';
import { ExcludesUndefined, Product } from '../utils/types';
import useSelectedTags from '../hooks/useSelectedTags';

type ProductsProps = {
  products: Product[];
};

const INITIAL_PRICE: PriceRange = { min: false, max: false };

export default function Products({ products }: ProductsProps) {
  const [tags, toggleTag, resetTagFilters] = useSelectedTags(products);
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState(INITIAL_PRICE);

  const handleResetFilters = () => {
    resetTagFilters();
    setSearch('');
    setPrice(INITIAL_PRICE);
  };

  const handlePriceChange = (name: string, newPrice: number) => {
    setPrice((oldPrice) => ({
      ...oldPrice,
      [name]: newPrice,
    }));
  };

  const renderMatchingProducts = () => {
    const hasSearchTermEntered = !!search.length;

    return products
      .map((product) => {
        const hasSelectedTags = tags.selected.every((tagName) =>
          product.tags.includes(tagName),
        );

        const noTagFilterOrMatchesTag =
          hasSelectedTags || !tags.selected.length;

        const hasMatchingSearchTerm =
          hasSearchTermEntered &&
          (product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search) ||
            product.tags.some((tag) => tag.includes(search)));

        const isMatchingProduct = hasSearchTermEntered
          ? hasMatchingSearchTerm && noTagFilterOrMatchesTag
          : noTagFilterOrMatchesTag;

        if (isMatchingProduct) {
          const productTags = productTagsAsObject(product.tags, tags.all);
          return (
            <ProductCard
              {...product}
              tags={productTags}
              key={`${product.id}-${product.name}`}
              onToggle={(name: string) => toggleTag(name)}
            />
          );
        }
        return undefined;
      })
      .filter((Boolean as any) as ExcludesUndefined);
  };

  return (
    <div className="my-8" data-testid="product-list">
      <h1 className="text-5xl mb-4">Products</h1>
      <Filters
        tags={tags.all}
        toggleTag={toggleTag}
        onSearchInput={setSearch}
        searchTerm={search}
        price={price}
        onPriceChange={handlePriceChange}
        resetFilters={handleResetFilters}
      />
      {renderMatchingProducts()}
    </div>
  );
}
