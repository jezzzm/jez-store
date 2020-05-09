import React from 'react';
import TextWithSearch from '../common/text-with-search';

type DescriptionProps = {
  content: string;
};

export default function Description({ content }: DescriptionProps) {
  return (
    <div className="mb-8" data-testid="description">
      <p className="text-gray-700 text-sm sm:text-base">
        <TextWithSearch content={content} matchedStyles="bg-yellow-400" />
      </p>
    </div>
  );
}
