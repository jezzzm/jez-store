import { useState, useContext, useEffect } from 'react';
import SearchContext from '../context/search-context';
import { findTextMatches } from '../utils/utils';
import { TextMatch } from '../utils/types';

export default function useSearchMatch(content: string): TextMatch[] {
  const [search] = useContext(SearchContext);
  const [textGroup, setTextGroup] = useState(findTextMatches(content, search));

  useEffect(() => {
    const newTextGroup = findTextMatches(content, search);
    setTextGroup(newTextGroup);
  }, [search, content]);

  return textGroup;
}
