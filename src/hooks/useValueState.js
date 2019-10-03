import { useState } from 'react';

const useValueState = (initValue) => {
  const [value, setValue] = useState(initValue);

  return [
    value,
    (e) => {
      setValue(e.target.value);
    },
    () => {
      setValue('');
    },
  ];
};

export default useValueState;
