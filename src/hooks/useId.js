import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';

const useId = (propsId) => {
  const randomId = useMemo(() => uuidv4(), []);
  return propsId || randomId;
};

export default useId;
