import React from 'react';
import Tags, { TagsInterface } from './tags';
import Sentences from './sentences';

type ProductCardProps = {
  name: string;
  sentences: string[];
  tags: TagsInterface;
  onToggle: CallableFunction;
  id: number;
  image: string;
  price: string;
};

export default function ProductCard({
  name,
  sentences,
  tags,
  onToggle,
  id,
  image,
  price,
}: ProductCardProps) {
  return (
    <div
      className="max-w-xl rounded shadow-md p-8 mb-6 mx-auto hover:bg-gray-100 transition duration-200"
      data-testid="product-card"
      data-productid={id}
    >
      <div className="flex justify-between align-top mb-4">
        <div className="w-full">
          <h2
            className="font-bold text-4xl mb-4"
            data-testid="product-card-title"
          >
            {name}
          </h2>
          <div className="flex justify-between items-center mb-4">
            <p className="font-extrabold text-lg text-green-600">${price}</p>
            <p className="text-sm font-semibold text-gray-700">
              Product ID: {id}
            </p>
          </div>
        </div>
        <div className="ml-8">
          <img src={image} className="h-auto" />
        </div>
      </div>

      <Sentences nameId={`${id}-${name}`} sentences={sentences} />
      <Tags tags={tags} onToggle={onToggle} />
    </div>
  );
}
