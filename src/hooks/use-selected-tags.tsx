import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import tagState from '../recoil/tag-state';
import productsState, { productTags } from '../recoil/products-state';
import { getTagsFromProducts } from '../utils/tags';
import { TagAsArray, TagsInterface } from '../utils/types';

export default function useSelectedTags() {
  const products = useRecoilValue(productsState);
  const tags = useRecoilValue(productTags);
  const [selected, setSelected] = useState<(string | undefined)[]>([]);

  const toggle = (name: string): void => {
    const index = selected.indexOf(name);
    if (index > -1) {
      setSelected((old) => old.splice(index, 1));
    } else {
      setSelected((old) => [...old, name]);
    }
  };

  const reset = (): void => {
    setSelected([]);
  };

  // useEffect(() => {
  //   const tagsArray: TagAsArray[] = Object.entries(all);

  //   const newSelected = tagsArray
  //     .filter(([_, { selected }]) => selected)
  //     .map(([tag]) => tag);

  //   setSelected(newSelected);
  // }, [all]);

  return [selected, toggle, reset] as const;
}
