import React from 'react';
import useUniqueId from '../../hooks/use-unique-id';
import TextWithSearch from '../common/text-with-search';

type TagProps = {
  name: string;
  count: number;
  onToggle: CallableFunction;
  checked: boolean;
  withSearch: boolean;
};

export default function Tag({
  name,
  count,
  onToggle,
  checked,
  withSearch,
}: TagProps) {
  const id = useUniqueId('tag-checkbox');
  const formattedName = `${name} (${count})`;

  return (
    <div className="checkbox-ally inline-block mr-2 mb-2">
      <input
        id={id}
        className="opacity-0 w-0"
        type="checkbox"
        data-testid="tag"
        onClick={() => onToggle(name)}
        defaultChecked={checked}
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
          formattedName
        )}
      </label>
    </div>
  );
}
