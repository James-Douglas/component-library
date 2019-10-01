import { useState } from 'react';

const useToggleState = (initValue) => {
  const [value, setToggle] = useState(initValue);

  return [
    value,
    () => {
      console.log("toggle method", value)
      setToggle((v) => {
        const val = !v
        console.log(val)
        return val
      })
    }
  ]
};

export default useToggleState;
