import React from 'react';
import Tags from './tags';
import Sentences from './sentences';

type CardProps = {
  text: string;
};
const CardTitle = ({ text }: CardProps) => (
  <h2 className="font-bold text-4xl mb-4" data-testid="product-card-title">
    {text}
  </h2>
);

type ProductCardProps = {
  name: string;
  sentences: string[];
  tags: string[];
};

export default function ProductCard({
  name,
  sentences,
  tags,
}: ProductCardProps) {
  return (
    <div
      className="max-w-lg rounded shadow-md p-4 mb-4"
      data-testid="product-card"
    >
      <CardTitle text={name} />
      <Sentences productName={name} sentences={sentences} />
      <Tags tags={tags} />
    </div>
  );
}
