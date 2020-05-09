import { useState, useContext, useEffect } from 'react';
import SearchContext from '../context/search-context';
import { findTextMatches } from '../utils/utils';
import { TextMatch } from '../utils/types';

// type ContentChange = (newContent: string) => void;

export default function useSearchMatchText(content: string): TextMatch[] {
  const [search] = useContext(SearchContext);
  const [textGroup, setTextGroup] = useState(findTextMatches(content, search));

  useEffect(() => {
    const newTextGroup = findTextMatches(content, search);
    setTextGroup(newTextGroup);
  }, [search, content]);

  // const onContentChange: ContentChange = (newContent) => {
  //   const newTextGroup = findTextMatches(newContent, search);
  //   setTextGroup(newTextGroup);
  // };
  return textGroup;
}
