import { useLayoutEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export default function useScrollPosition(offsetYStart = 0) {
  const [isSticky, setIsSticky] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      let stuck = false;
      if (isBrowser) {
        stuck = window.scrollY > offsetYStart;
      }
      setIsSticky(stuck);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return isSticky;
}
