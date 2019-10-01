import { useState } from 'react';

const useToggleState = (initValue) => {
  const [value, setToggle] = useState(initValue);

  return {
    value,
    toggle: () => {
      setToggle(!value);
    },
  };
};

export default useToggleState;
