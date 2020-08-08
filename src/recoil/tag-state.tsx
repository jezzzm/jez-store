import { atom } from 'recoil';
import { TagsInterface } from '../utils/types';

const tagState = atom({
  key: 'tagState',
  default: {},
});

export default tagState;
