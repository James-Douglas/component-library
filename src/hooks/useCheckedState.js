import { useState } from 'react';

const useCheckedState = (initValue) => {
  const [checked, setChecked] = useState(initValue);
  
  return {
    checked,
    onChange: e => {
      setChecked(e.target.checked);
      console.log(e.target.checked)
    }
  };
};

export default useCheckedState;