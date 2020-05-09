import { useRef } from 'react';

let lastId = 0;
const getNextId = () => {
  lastId++;
  return lastId;
};

export default function useUniqueId(prefix = 'id') {
  const ref = useRef(`${prefix}-${getNextId()}`);

  return ref.current;
}
