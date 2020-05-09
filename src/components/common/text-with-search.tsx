import React, { useRef } from 'react';
import { TextMatch } from '../../utils/types';

type TextWithSearchProps = {
  textGroup: TextMatch[];
  matchedStyles: string;
  unmatchedStyles?: string;
};
export default function TextWithSearch({
  textGroup,
  matchedStyles,
  unmatchedStyles = '',
}: TextWithSearchProps) {
  const id = useRef('text-with-search');
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
