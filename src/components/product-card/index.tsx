import React from 'react';
import Tags from '../common/tags';
import Description from './description';
import Header from './header';
import CardContainer from './card-container';
import { TagsInterface } from '../../utils/types';

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
    <CardContainer id={id}>
      <Header name={name} image={image} price={price} id={id} />
      <Description content={description} />
      <Tags tags={tags} onToggle={onToggle} withSearch />
    </CardContainer>
  );
}
