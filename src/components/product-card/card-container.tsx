import React, { FunctionComponent } from 'react';

type CardContainerProps = {
  id: number;
};

const CardContainer: FunctionComponent<CardContainerProps> = ({
  children,
  id,
}) => (
  <div
    className="max-w-xl rounded shadow-md p-8 pb-6 mb-6 mx-auto hover:bg-gray-100 transition duration-200"
    data-testid="product-card"
    data-productid={id}
  >
    {children}
  </div>
);

export default CardContainer;
