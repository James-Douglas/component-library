import cuid from 'cuid';
import { useMemo } from 'react';

const useId = (propsId) => {
  const randomId = useMemo(() => cuid(), []);
  return propsId || randomId;
};

export default useId;
