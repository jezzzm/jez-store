import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { findTextMatches } from '../utils/utils';
import { TextMatch } from '../utils/types';

import searchState from '../recoil/search-state';

export default function useSearchValue(content: string): TextMatch[] {
  const search = useRecoilValue(searchState);

  return useMemo(() => findTextMatches(content, search), [search, content]);
}
