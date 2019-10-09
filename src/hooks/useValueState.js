import { useState } from 'react';

const useValueState = (initValue) => {
  const [value, setValue] = useState(initValue);

  return [
    value,
    (val) => {
      setValue(val);
    },
    () => {
      setValue('');
    },
  ];
};

export default useValueState;
