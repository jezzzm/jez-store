import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('<App />', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeInTheDocument();
  expect(getByTestId('product-list')).toBeInTheDocument();
});
