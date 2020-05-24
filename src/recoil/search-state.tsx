import { atom } from 'recoil';

const searchState = atom({
  key: 'searchState',
  default: '',
  persistence_UNSTABLE: {
    type: 'log',
  },
});

export default searchState;
