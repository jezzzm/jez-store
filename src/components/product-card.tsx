import React from 'react';
import Tags from './tags';

type CardProps = {
  text: string;
};
const CardTitle = ({ text }: CardProps) => (
  <h2 className="font-bold text-4xl mb-4">{text}</h2>
);

export default function ProductCard() {
  return (
    <div className="max-w-lg rounded shadow-md p-4 m-4">
      <CardTitle text="This is my title!" />
      <div className="pb-4">
        <p className="text-gray-700">this is a sentence</p>
        <p className="text-gray-700">this is a sentence</p>
      </div>
      <Tags tags={['one', 'two', 'three']} />
    </div>
  );
}
