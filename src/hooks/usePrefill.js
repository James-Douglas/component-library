import { useEffect, useState } from 'react';

export default function usePrefill(prefillValue, value, isDirty) {
  const [isUsePrefill, setIsUsePrefill] = useState(false);

  useEffect(() => {
    if (typeof value === 'boolean') {
      setIsUsePrefill(prefillValue && !isDirty);
    } else {
      setIsUsePrefill(prefillValue && prefillValue.length && !isDirty && (!value || !value.length));
    }
  }, [prefillValue, value, isDirty]);

  return isUsePrefill;
}
