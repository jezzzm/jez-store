import { useState } from 'react';
import { TagsInterface } from '../components/tags';
import { Product } from '../components/products';
import { flattenAndSortTags } from '../utils/utils';

type ExcludesUndefined = <T>(x: T | undefined) => x is T;

export default function useSelectedTags(products: Product[]) {
  const flattenedTags: string[] = flattenAndSortTags(products);
  const INITIAL_STATE = flattenedTags.reduce((acc: TagsInterface, tag) => {
    acc[tag] = false;
    return acc;
  }, {});

  const [allTags, setTags] = useState(INITIAL_STATE);

  const toggleTag = (name: string) => {
    setTags((oldTags) => ({
      ...oldTags,
      [name]: !oldTags[name],
    }));
  };

  const selectedTags: string[] = Object.entries(allTags)
    .map(([tag, selected]) => {
      if (selected) {
        return tag;
      }
      return undefined;
    })
    .filter((Boolean as any) as ExcludesUndefined);

  return [allTags, selectedTags, toggleTag] as const;
}
