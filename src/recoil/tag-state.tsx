import { atom, selector } from 'recoil';

const selectedTagState = atom({
  key: 'selectedTagState',
  default: [],
});

export const selectedTags = selector({
  key: 'selectedTags',
  get: ({get}) => get(selectedTagState),
  set: ({ get, set }, name) => {
    const oldSelected = get(selectedTagState);
    const index = oldSelected.indexOf(name);
    const newSelected =
      index > -1 ? oldSelected.splice(index, 1) : [...oldSelected, name];

     return set(selectedTagState, newSelected);
  },
  reset: 
});

export default selectedTagState;
