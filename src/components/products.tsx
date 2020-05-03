import React, { useState } from 'react';
import ProductCard from './product-card';
import Filters from './filters';
import { productTagsAsObject } from '../utils/utils';
import { ExcludesUndefined, Product } from '../utils/types';
import useSelectedTags from '../hooks/useSelectedTags';

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  const [tags, toggleTag, resetTagFilters] = useSelectedTags(products);
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState({ min: 0, max: Infinity });

  const handleResetFilters = () => {
    resetTagFilters();
    setSearch('');
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
        const hasSelectedTag = tags.selected.every((tagName) =>
          product.tags.includes(tagName),
        );

        const hasMatchingSearchTerm =
          hasSearchTermEntered &&
          (product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search) ||
            product.tags.some((tag) => tag.includes(search)));

        const noTagFilterOrMatchesTag = hasSelectedTag || !tags.selected.length;

        const isMatchingProduct = hasSearchTermEntered
          ? hasMatchingSearchTerm && noTagFilterOrMatchesTag
          : noTagFilterOrMatchesTag;

        if (isMatchingProduct) {
          const productTags = productTagsAsObject(product.tags, tags.all);
          return (
            <ProductCard
              {...product}
              tags={productTags}
              key={product.id}
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
