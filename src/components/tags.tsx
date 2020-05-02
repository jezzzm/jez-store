import React from 'react';

type TagComponentProps = {
  name: string;
  onToggle: CallableFunction;
  selected: boolean;
};

const Tag = ({ name, onToggle, selected }: TagComponentProps) => (
  <span
    className={`${
      selected ? 'bg-gray-500' : 'bg-gray-200'
    } inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer`}
    data-testid="tag"
    onClick={() => onToggle(name)}
  >
    # {name}
  </span>
);

export interface TagsInterface {
  [key: string]: boolean;
}

type TagsProps = {
  tags: TagsInterface;
  onToggle: CallableFunction;
};

export default function Tags({ tags, onToggle }: TagsProps) {
  return (
    <div data-testid="tags">
      {Object.entries(tags).map(([name, selected]) => (
        <Tag
          name={name.toLowerCase()}
          onToggle={onToggle}
          selected={selected}
          key={`tag-${name}-${selected}`}
        />
      ))}
    </div>
  );
}
