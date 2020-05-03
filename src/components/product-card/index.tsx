import React from 'react';
import Tags, { TagsInterface } from '../tags';
import Description from './description';
import Header from './header';

type ProductCardProps = {
  name: string;
  description: string;
  tags: TagsInterface;
  onToggle: CallableFunction;
  id: number;
  image: string;
  price: string;
};

export default function ProductCard({
  name,
  description,
  tags,
  onToggle,
  id,
  image,
  price,
}: ProductCardProps) {
  return (
    <div
      className="max-w-xl rounded shadow-md p-8 pb-6 mb-6 mx-auto hover:bg-gray-100 transition duration-200"
      data-testid="product-card"
      data-productid={id}
    >
      <Header name={name} image={image} price={price} id={id} />
      <Description content={description} />
      <Tags tags={tags} onToggle={onToggle} />
    </div>
  );
}
