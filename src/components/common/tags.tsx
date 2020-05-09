import React, { useRef } from 'react';
import { getUniqueId } from '../../utils/utils';

type TagComponentProps = {
  name: string;
  onToggle: CallableFunction;
  checked: boolean;
};

const Tag = ({ name, onToggle, checked }: TagComponentProps) => {
  const id = useRef(getUniqueId('tag-checkbox'));
  return (
    <div className="checkbox-ally inline-block mr-2 mb-2">
      <input
        id={id.current}
        className="opacity-0 w-0"
        type="checkbox"
        data-testid="tag"
        onClick={() => onToggle(name)}
        checked={checked}
        readOnly
      />
      <label
        htmlFor={id.current}
        className={`${
          checked
            ? 'bg-gray-800 text-white hover:bg-black '
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } rounded-full px-3 py-1 text-sm font-semibold cursor-pointer transition duration-200`}
      >
        # {name}
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
};

export default function Tags({
  tags,
  onToggle,
  ariaLabel = 'Product Tags',
}: TagsProps) {
  const id = useRef(getUniqueId('tag-ref'));
  return (
    <div aria-label={ariaLabel}>
      {Object.entries(tags).map(([name, checked]) => (
        <Tag
          name={name.toLowerCase()}
          onToggle={onToggle}
          checked={checked}
          key={`${id.current}-${name}`}
        />
      ))}
    </div>
  );
}
