import React from 'react';
import { render } from '@testing-library/react';
import Tags from './tags';

describe('<Tags />', () => {
  const tags = ['one', 'one', 'two', 'three'];
  const { getAllByText, queryAllByTestId } = render(<Tags tags={tags} />);
  const allTags = queryAllByTestId('tag');

  it('should render one of each tag', () => {
    tags.forEach((tag) => {
      expect(getAllByText(`#${tag}`)).toHaveLength(1);
      expect(getAllByText(`#${tag}`)[0]).toBeInTheDocument();
    });
  });

  it('should render in alphabetical order', () => {
    expect(allTags[0]).toHaveTextContent('#one');
    expect(allTags[1]).toHaveTextContent('#three');
    expect(allTags[2]).toHaveTextContent('#two');
  });
});
