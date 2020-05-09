import { useContext, useMemo } from 'react';
import SearchContext from '../context/search-context';
import { findTextMatches } from '../utils/utils';
import { TextMatch } from '../utils/types';

export default function useSearchMatch(content: string): TextMatch[] {
  const [search] = useContext(SearchContext);

  return useMemo(() => findTextMatches(content, search), [search, content]);
}
