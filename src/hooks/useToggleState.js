import { useState } from 'react';

const useToggleState = (initValue) => {
  const [toggle, setToggle] = useState(initValue);

  return {
    toggle,
    onChange: (e) => {
      setToggle(e.target.checked);
    },
  };
};

export default useToggleState;
