import { useState, useEffect } from 'react';
import _ from 'lodash';

const isWindowAvailable = typeof window !== 'undefined';
const getPosition = () => (isWindowAvailable ? window.pageYOffset : undefined);

const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(getPosition());

  useEffect(() => {
    if (!isWindowAvailable) {
      return false;
    }

    const handleScroll = () => {
      setScrollPosition(getPosition());
    };

    const throttled = _.throttle(handleScroll, 50);

    window.addEventListener('scroll', throttled);

    return () => {
      window.removeEventListener('scroll', throttled);
    };
  }, []);

  return scrollPosition;
};

export default useWindowScrollPosition;
