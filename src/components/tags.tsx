import React from 'react';

type TagProps = {
  name: string;
};

const Tag = ({ name }: TagProps) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    #{name}
  </span>
);

type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  return (
    <div>
      {tags.map((name, idx) => (
        <Tag name={name} key={`tag-${name}-${idx}`} />
      ))}
    </div>
  );
}
