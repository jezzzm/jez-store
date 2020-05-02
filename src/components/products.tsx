import React, { useState, useEffect } from 'react';
import ProductCard from './product-card';
import Tags, { TagsInterface } from './tags';
import { flattenAndSortTags, productTagsAsObject } from '../utils/utils';

export interface Product {
  name: string;
  sentences: string[];
  tags: string[];
}

type ProductsProps = {
  products: Product[];
};

type ExcludesUndefined = <T>(x: T | undefined) => x is T;

export default function Products({ products }: ProductsProps) {
  const allTags: string[] = flattenAndSortTags(products);
  const INITIAL_STATE = allTags.reduce((acc: TagsInterface, tag) => {
    acc[tag] = false;
    return acc;
  }, {});

  const [tags, setTags] = useState(INITIAL_STATE);

  const handleToggle = (name: string) => {
    setTags((oldTags) => ({
      ...oldTags,
      [name]: !oldTags[name],
    }));
  };

  const filteredTags = Object.entries(tags)
    .map(([tag, selected]) => {
      if (selected) {
        return tag;
      }
    })
    .filter(Boolean);

  const renderProducts = () =>
    products
      .map((product) => {
        const productTags = productTagsAsObject(product.tags, tags);
        const activeProductTags = product.tags.some((tagName) =>
          filteredTags.includes(tagName),
        );

        if (activeProductTags || !filteredTags.length) {
          return (
            <ProductCard
              {...product}
              tags={productTags}
              key={product.name}
              onToggle={handleToggle}
            />
          );
        }
      })
      .filter((Boolean as any) as ExcludesUndefined);

  return (
    <div data-testid="product-list">
      <h1 className="text-5xl mb-4">Products</h1>
      <div className="mb-10" data-testid="all-tags">
        <Tags tags={tags} onToggle={handleToggle} />
      </div>
      {renderProducts()}
    </div>
  );
}
