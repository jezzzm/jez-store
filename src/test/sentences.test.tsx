import React from 'react';
import { render } from '@testing-library/react';
import Sentences from '../components/sentences';

test('<Sentences />', () => {
  const sentences = ['a quick', 'brown fox', 'jumped over'];
  const { getAllByText } = render(
    <Sentences productName="test" sentences={sentences} />,
  );

  sentences.forEach((sentence) => {
    expect(getAllByText(sentence)).toHaveLength(1);
    expect(getAllByText(sentence)[0]).toBeInTheDocument();
  });
});
