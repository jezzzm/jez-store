import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import searchState from '../recoil/search-state';
import ProductCard from './product-card';
import Filters from './filters';
import { isMatchingProduct } from '../utils/utils';
import { productTagsAsObject } from '../utils/tags';
import { Product } from '../utils/types';
import useSelectedTags from '../hooks/use-selected-tags';
import usePriceFilter from '../hooks/use-price-filter';

type ProductsProps = {
  products: Product[];
};

let inputTimer: null | NodeJS.Timeout = null;

export default function Products({ products }: ProductsProps) {
  const [allTags, toggleTag, selectedTags, resetTagFilters] = useSelectedTags();
  const [price, onPriceChange, priceErrors, resetPrice] = usePriceFilter();
  const [search, setSearch] = useRecoilState(searchState);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleResetFilters = () => {
    resetTagFilters(products);
    setSearch('');
    resetPrice?.();
  };

  useEffect(() => {
    inputTimer && clearTimeout(inputTimer);

    inputTimer = setTimeout(() => {
      setFilteredProducts(
        products.filter((product) =>
          isMatchingProduct(product, selectedTags, search, price, priceErrors),
        ),
      );
    }, 400); // 400ms debounce before updating ui with filter-matched products
  }, [selectedTags, price, search, priceErrors, products]);

  useEffect(() => {
    resetTagFilters(products);
  }, []);

  return (
    <section className="my-8" aria-label="Product List">
      <h1 className="text-5xl mb-4">Products</h1>
      <Filters
        price={price}
        onPriceChange={onPriceChange}
        resetFilters={handleResetFilters}
        priceErrors={priceErrors}
      />
      <div className="my-4">
        {filteredProducts.map((product) => (
          <ProductCard
            {...product}
            tags={productTagsAsObject(product.tags, allTags)}
            onToggle={toggleTag}
            key={`${product.id}-${product.name}`}
          />
        ))}
      </div>
    </section>
  );
}
