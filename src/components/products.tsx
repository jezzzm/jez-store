import React, { useState, useContext } from 'react';
import ProductCard from './product-card';
import Filters from './filters';
import { PriceRange } from './filters/price';
import { productTagsAsObject, isMatchingProduct } from '../utils/utils';
import { ExcludesUndefined, Product } from '../utils/types';
import useSelectedTags from '../hooks/use-selected-tags';
import SearchContext from '../context/search-context';

type ProductsProps = {
  products: Product[];
};

const INITIAL_PRICE: PriceRange = { min: 0, max: 0 };

export default function Products({ products }: ProductsProps) {
  const [tags, toggleTag, resetTagFilters] = useSelectedTags(products);
  const [price, setPrice] = useState(INITIAL_PRICE);
  const [search, setSearch] = useContext(SearchContext);

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
    return products
      .map((product) => {
        const match = isMatchingProduct(product, tags, search);

        if (match) {
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
    <section className="my-8" aria-label="Product List">
      <h1 className="text-5xl mb-4">Products</h1>
      <Filters
        tags={tags.all}
        toggleTag={toggleTag}
        price={price}
        onPriceChange={handlePriceChange}
        resetFilters={handleResetFilters}
      />
      <div className="my-4">{renderMatchingProducts()}</div>
    </section>
  );
}
