import { useEffect, useState } from 'react';

export default function usePrefill(prefillValue, value, isDirty) {
  const [isUsePrefill, setIsUsePrefill] = useState(false);

  useEffect(() => {
    setIsUsePrefill(prefillValue && prefillValue.length && !isDirty && !value.length);
  }, [prefillValue, value, isDirty]);

  return isUsePrefill;
}
