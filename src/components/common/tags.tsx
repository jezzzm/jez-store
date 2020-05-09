import React from 'react';
import useUniqueId from '../../hooks/useUniqueId';
import TextWithSearch from '../common/text-with-search';

type TagComponentProps = {
  name: string;
  onToggle: CallableFunction;
  checked: boolean;
  withSearch: boolean;
};

const Tag = ({ name, onToggle, checked, withSearch }: TagComponentProps) => {
  const id = useUniqueId('tag-checkbox');
  return (
    <div className="checkbox-ally inline-block mr-2 mb-2">
      <input
        id={id}
        className="opacity-0 w-0"
        type="checkbox"
        data-testid="tag"
        onClick={() => onToggle(name)}
        checked={checked}
        readOnly
      />
      <label
        htmlFor={id}
        className={`${
          checked
            ? 'bg-gray-800 text-white hover:bg-black '
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } rounded-full px-3 py-1 text-sm font-semibold cursor-pointer transition duration-200`}
      >
        #{' '}
        {withSearch ? (
          <TextWithSearch content={name} matchedStyles="bg-yellow-400" />
        ) : (
          name
        )}
      </label>
    </div>
  );
};

export interface TagsInterface {
  [key: string]: boolean;
}

type TagsProps = {
  tags: TagsInterface;
  onToggle: CallableFunction;
  ariaLabel?: string;
  withSearch?: boolean;
};

export default function Tags({
  tags,
  onToggle,
  ariaLabel = 'Product Tags',
  withSearch = false,
}: TagsProps) {
  const id = useUniqueId('tag-ref');
  return (
    <div aria-label={ariaLabel}>
      {Object.entries(tags).map(([name, checked]) => (
        <Tag
          name={name.toLowerCase()}
          onToggle={onToggle}
          checked={checked}
          key={`${id}-${name}`}
          withSearch={withSearch}
        />
      ))}
    </div>
  );
}
