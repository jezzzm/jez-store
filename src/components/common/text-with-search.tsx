import React from 'react';
import useSearchMatch from '../../hooks/useSearchMatchText';
import useUniqueId from '../../hooks/useUniqueId';

type TextWithSearchProps = {
  content: string;
  matchedStyles: string;
  unmatchedStyles?: string;
};
export default function TextWithSearch({
  content,
  matchedStyles,
  unmatchedStyles = '',
}: TextWithSearchProps) {
  const id = useUniqueId('text-with-search');
  const textGroup = useSearchMatch(content);
  return (
    <>
      {textGroup.map(({ text, match }) => {
        const key = `${id}-${text}`;
        if (match) {
          return (
            <span key={key} className={matchedStyles}>
              {text}
            </span>
          );
        }
        return (
          <span key={key} className={unmatchedStyles}>
            {text}
          </span>
        );
      })}
    </>
  );
}
