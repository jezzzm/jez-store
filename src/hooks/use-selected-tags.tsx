import { useRecoilState } from 'recoil';
import tagState from '../recoil/tag-state';
import { getTagsFromProducts } from '../utils/tags';
import { Product, TagAsArray } from '../utils/types';
import { useState, useEffect } from 'react';

export default function useSelectedTags() {
  const [all, setAll] = useRecoilState(tagState);
  const [selected, setSelected] = useState<(string | undefined)[]>([]);
  const toggleTag = (name: string): void => {
    setAll({
      ...all,
      [name]: {
        count: all[name]?.count,
        selected: !all[name]?.selected,
      },
    });
  };

  const resetTagFilters = (products: Product[]): void => {
    setAll(getTagsFromProducts(products));
  };

  useEffect(() => {
    const tagsArray: TagAsArray[] = Object.entries(all);

    const newSelected = tagsArray
      .filter(([_, { selected }]) => selected)
      .map(([tag]) => tag);

    setSelected(newSelected);
  }, [all]);

  return [all, toggleTag, selected, resetTagFilters] as const;
}
