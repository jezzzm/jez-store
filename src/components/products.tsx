import React from 'react';
import ProductCard from './product-card';

interface product {
  name: string;
  sentences: string[];
  tags: string[];
}

type ProductsProps = {
  products: product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div className="m-4" data-testid="product-list">
      <h1 className="text-5xl mb-4">Products</h1>
      {products.map((product) => (
        <ProductCard {...product} key={JSON.stringify(product)} />
      ))}
    </div>
  );
}
