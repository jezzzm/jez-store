import React, { useRef } from 'react';
import useSearchMatchText from '../../hooks/useSearchMatchText';

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
  const id = useRef('text-with-search');
  const textGroup = useSearchMatchText(content);
  return (
    <>
      {textGroup.map(({ text, match }) => {
        const key = `${id.current}-${text}`;
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
