import React from 'react';
import { render } from '@testing-library/react';
import Products from './products';
import generateDemoProducts from '../fixtures/generate-demo-products';

test('<Products />', () => {
  const products = generateDemoProducts(3);
  const { getByText, queryAllByTestId } = render(
    <Products products={products} />,
  );

  expect(getByText(products[0].name)).toBeInTheDocument();
  expect(queryAllByTestId('product-card')).toHaveLength(3);
});
