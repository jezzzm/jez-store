import React from 'react';
import ProductCard from './product-card';
import Tags from './tags';
import { productTagsAsObject } from '../utils/utils';
import useSelectedTags from '../hooks/useSelectedTags';

export interface Product {
  name: string;
  id: number;
  sentences: string[];
  tags: string[];
}

type ExcludesUndefined = <T>(x: T | undefined) => x is T;

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  const [allTags, selectedTags, toggleTag] = useSelectedTags(products);

  const renderProducts = () =>
    products
      .map((product) => {
        const productTags = productTagsAsObject(product.tags, allTags);
        const activeProductTags = product.tags.some((tagName) =>
          selectedTags.includes(tagName),
        );

        if (activeProductTags || !selectedTags.length) {
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

  return (
    <div data-testid="product-list">
      <h1 className="text-5xl mb-4">Products</h1>
      <div className="mb-10" data-testid="all-tags">
        <Tags tags={allTags} onToggle={(name: string) => toggleTag(name)} />
      </div>
      {renderProducts()}
    </div>
  );
}
