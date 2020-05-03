import React from 'react';
import { render } from '@testing-library/react';
import Description from '../components/product-card/description';

test('<Sentences />', () => {
  const content = 'a quick brown fox jumped over';
  const { getByText } = render(<Description content={content} />);
  expect(getByText(content)).toBeInTheDocument();
});
