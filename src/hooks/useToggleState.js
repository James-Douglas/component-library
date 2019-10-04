import { useState } from 'react';

const useToggleState = (initValue) => {
  const [value, setToggle] = useState(initValue);

  return [
    value,
    () => {
      setToggle((v) => {
        const val = !v;
        return val;
      });
    },
  ];
};

export default useToggleState;
