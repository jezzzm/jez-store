import { atom } from 'recoil';

const tagState = atom({
  key: 'tagState',
  default: [],
  persistence_UNSTABLE: {
    type: 'log',
  },
});

export default tagState;
