import { useState, useEffect, useRef } from 'react';
import { inRange } from 'lodash';

import useWindowScrollPosition from './UseWindowScrollPostion';

const useCurrentSection = (sections, scrollMargin) => {
  const scrollPosition = useWindowScrollPosition();
  const ref = useRef(null);

  // This state stored the closest section to the sticky bar currently.
  const [currentTopSectionId, setCurrentTopSectionId] = useState(undefined);

  const [sectionTopPositions, setSectionTopPositions] = useState([]);

  const firstSectionId = sections[0].id;

  // In the first step, we are going to get all the section top positions to check if the sticky bar is scrolling over them.
  useEffect(() => {
    setSectionTopPositions(
      sections.map((section) => {
        const element = document.getElementById(section.id);
        return Math.trunc(element.getBoundingClientRect().top + document.documentElement.scrollTop - ref.current.offsetHeight - scrollMargin);
      }),
    );
  }, [scrollMargin, sections]);

  useEffect(() => {
    // sectionShiftPositions[0] is the trigger position for the first section to be visible
    if (sectionTopPositions[0] > 0 && scrollPosition >= sectionTopPositions[0]) {
      for (let i = 0; i < sectionTopPositions.length; i += 1) {
        const sectionTop = sectionTopPositions[i];
        const nextSectionTop = i === sectionTopPositions.length - 1 ? Number.MAX_SAFE_INTEGER : sectionTopPositions[i + 1];
        if (inRange(scrollPosition, sectionTop, nextSectionTop)) {
          setCurrentTopSectionId(sections[i].id);
          break;
        }
      }
    }
  }, [scrollPosition, sectionTopPositions, sections]);

  return { ref, currentTopSectionId, firstSectionId };
};

export default useCurrentSection;
