import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import generateDemoProducts from '../fixtures/generate-demo-products';

test('<App />', () => {
  const products = generateDemoProducts(1);
  const { getByLabelText, getByRole } = render(<App products={products} />);
  expect(getByRole('main')).toBeInTheDocument();
  expect(getByLabelText('Product List')).toBeInTheDocument();
});
