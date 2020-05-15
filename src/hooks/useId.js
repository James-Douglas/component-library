import { useMemo } from 'react';

const uuidv4 = require('uuid/v4');

const useId = (propsId) => {
  const randomId = useMemo(() => uuidv4(), []);
  return propsId || randomId;
};

export default useId;
