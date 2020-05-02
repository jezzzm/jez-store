import React from 'react';

type TagProps = {
  name: string;
};

const Tag = ({ name }: TagProps) => (
  <span
    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    data-testid="tag"
  >
    #{name}
  </span>
);

type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  const sortedUnique = Array.from(new Set(tags)).sort();

  return (
    <div data-testid="tags">
      {sortedUnique.map((name, idx) => (
        <Tag name={name} key={`tag-${name}-${idx}`} />
      ))}
    </div>
  );
}
