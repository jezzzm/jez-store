import React from 'react';
import { render } from '@testing-library/react';
import Tags from '../components/tags';

describe('<Tags />', () => {
  const tags = {
    one: true,
    two: false,
    three: false,
  };
  const { getAllByText, queryAllByTestId } = render(
    <Tags tags={tags} onToggle={() => {}} />,
  );
  const allTags = queryAllByTestId('tag');

  it('should render one of each tag', () => {
    Object.entries(tags).forEach(([tag, selected]) => {
      expect(getAllByText(`# ${tag}`)).toHaveLength(1);
      expect(getAllByText(`# ${tag}`)[0]).toBeInTheDocument();
    });
  });
});
