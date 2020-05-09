import React from 'react';
import useSearchMatchText from '../../hooks/useSearchMatchText';
import TextWithSearch from '../common/text-with-search';

type DescriptionProps = {
  content: string;
};

export default function Description({ content }: DescriptionProps) {
  const textGroup = useSearchMatchText(content);
  return (
    <div className="mb-8" data-testid="description">
      <p className="text-gray-700 text-sm sm:text-base">
        <TextWithSearch textGroup={textGroup} matchedStyles="bg-yellow-400" />
      </p>
    </div>
  );
}
