import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('<App />', () => {
  const { getByLabelText, getByRole } = render(<App />);
  expect(getByRole('main')).toBeInTheDocument();
  expect(getByLabelText('Product List')).toBeInTheDocument();
});
