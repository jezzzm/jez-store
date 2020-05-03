import { useState } from 'react';
import { TagsInterface } from '../components/common/tags';
import { flattenAndSortTags } from '../utils/utils';
import { ExcludesUndefined, Product } from '../utils/types';

export default function useSelectedTags(products: Product[]) {
  const flattenedTags: string[] = flattenAndSortTags(products);
  const INITIAL_STATE = flattenedTags.reduce((acc: TagsInterface, tag) => {
    acc[tag] = false;
    return acc;
  }, {});

  const [allTags, setTags] = useState(INITIAL_STATE);

  const toggleTag = (name: string): void => {
    setTags((oldTags) => ({
      ...oldTags,
      [name]: !oldTags[name],
    }));
  };

  const resetTagFilters = (): void => {
    setTags(INITIAL_STATE);
  };

  const selectedTags: string[] = Object.entries(allTags)
    .map(([tag, selected]) => {
      if (selected) {
        return tag;
      }
      return undefined;
    })
    .filter((Boolean as any) as ExcludesUndefined);

  return [
    { all: allTags, selected: selectedTags },
    toggleTag,
    resetTagFilters,
  ] as const;
}
