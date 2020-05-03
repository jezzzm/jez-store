import React from 'react';

type DescriptionProps = {
  content: string;
};

export default function Description({ content }: DescriptionProps) {
  return (
    <div className="mb-8" data-testid="description">
      <p className="text-gray-700 text-sm sm:text-base">{content}</p>
    </div>
  );
}
