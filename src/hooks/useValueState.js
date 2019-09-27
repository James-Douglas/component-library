import { useState } from 'react';

const useValueState = (initValue) => {
  const [value, setValue] = useState(initValue);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
      console.log(e.target.value);
    },
  };
};

export default useValueState;