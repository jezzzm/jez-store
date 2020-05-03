import React from 'react';

type HeaderProps = {
  price: string;
  id: number;
  image: string;
  name: string;
};

export default function Header({ price, id, image, name }: HeaderProps) {
  return (
    <div className="flex flex-col-reverse justify-between align-top mb-8 sm:flex-row">
      <div className="w-full">
        <h2
          className="font-bold text-2xl sm:text-4xl mb-4"
          data-testid="product-card-title"
        >
          {name}
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-bold text-md sm:text-lg text-green-600">
            ${price}
          </p>
          <p className="text-sm font-semibold text-gray-700">
            Product ID: {id}
          </p>
        </div>
      </div>
      <div className="mb-4 sm:ml-8 sm:mb-0">
        <img src={image} className="h-auto mx-auto" alt={name} title={name} />
      </div>
    </div>
  );
}
