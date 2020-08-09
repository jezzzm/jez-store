import React from 'react';
import Tag from './tag';
import useUniqueId from '../../hooks/use-unique-id';
import { TagsInterface } from '../../utils/types';

type TagsProps = {
  tags: TagsInterface;
  onToggle: CallableFunction;
  ariaLabel?: string;
  withSearch?: boolean;
};

export default function Tags({
  tags,
  ariaLabel = 'Product Tags',
  withSearch = false,
}: TagsProps) {
  const id = useUniqueId('tag-ref');

  return (
    <div aria-label={ariaLabel}>
      {Object.entries(tags).map(([name, count]) => (
        <Tag
          name={name.toLowerCase()}
          count={count}
          key={`${id}-${name}`}
          withSearch={withSearch}
        />
      ))}
    </div>
  );
}
