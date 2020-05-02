import React from 'react';
import ProductCard from './product-card';
import Tags from './tags';
import Button from './button';
import { productTagsAsObject } from '../utils/utils';
import { ExcludesUndefined } from '../utils/types';
import useSelectedTags from '../hooks/useSelectedTags';

export interface Product {
  name: string;
  id: number;
  sentences: string[];
  tags: string[];
  image: string;
  price: string;
}

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  const [tags, toggleTag, resetTagFilters] = useSelectedTags(products);

  const renderProducts = () =>
    products
      .map((product) => {
        const productTags = productTagsAsObject(product.tags, tags.all);
        const activeProductTags = product.tags.some((tagName) =>
          tags.selected.includes(tagName),
        );

        if (activeProductTags || !tags.selected.length) {
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
    <div className="my-8" data-testid="product-list">
      <div className="mb-10" data-testid="all-tags">
        <div className="mb-4 mx-auto flex justify-between items-center">
          <h1 className="text-5xl mb-4">Products</h1>
          <Button
            text="Reset Filters"
            type="info"
            size="md"
            onClick={resetTagFilters}
          />
        </div>
        <Tags tags={tags.all} onToggle={(name: string) => toggleTag(name)} />
      </div>
      {renderProducts()}
    </div>
  );
}
