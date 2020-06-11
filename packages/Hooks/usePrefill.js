import { useEffect, useState, useRef } from 'react';

export default function usePrefill(prefillValue, value, isDirty) {
  const [isUsePrefill, setIsUsePrefill] = useState(false);
  const previousValueRef = useRef();

  useEffect(() => {
    if (typeof value === 'boolean') {
      setIsUsePrefill(prefillValue && !isDirty);
    } else {
      setIsUsePrefill(prefillValue && prefillValue.length && !isDirty && value !== previousValueRef.current);
    }
    if (value !== previousValueRef.current) {
      previousValueRef.current = value;
    }
  }, [prefillValue, value, isDirty, previousValueRef]);

  return isUsePrefill;
}
