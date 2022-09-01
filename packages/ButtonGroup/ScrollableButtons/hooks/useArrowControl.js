import {
  useState, useEffect, useRef, useContext, useCallback,
} from 'react';
import { ManorContext } from '@comparethemarketau/manor-provider';

const useArrowControl = (scrolledToSectionId, trackingLabel) => {
  const { trackInteraction } = useContext(ManorContext);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [disableAllArrows, setDisableAllArrows] = useState(true);

  const contentRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const [tabRefs, setTabRefs] = useState({});

  //  if the width of the content is less than the width of the container, we don't need the arrows.
  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollWidth > contentRef.current.offsetWidth) {
      setDisableAllArrows(false);
    }
  }, []);

  const handleScroll = (event) => {
    if (!event || !event.target) {
      return;
    }
    handleArrowDisplay(event.target.scrollLeft);
  };

  const handleArrowDisplay = (scrollLeft) => {
    if (!showLeftArrow && scrollLeft > 0) {
      setShowLeftArrow(true);
    } else if (showLeftArrow && scrollLeft === 0) {
      setShowLeftArrow(false);
    }
    if (scrollLeft > 0
      && scrollLeft >= contentRef.current.scrollWidth - contentRef.current.clientWidth) {
      setShowRightArrow(false);
    } else if (!showRightArrow && Math.abs(scrollLeft) < contentRef.current.scrollWidth - contentRef.current.clientWidth) {
      setShowRightArrow(true);
    }
  };

  const handleLeftClick = () => {
    contentRef.current.scrollLeft -= (contentRef.current.scrollWidth - contentRef.current.clientWidth) / 3;
    trackInteraction('Click', 'Scrollable Buttons', '', trackingLabel, 'Left arrow button');
  };

  const handleRightClick = () => {
    contentRef.current.scrollLeft += (contentRef.current.scrollWidth - contentRef.current.clientWidth) / 3;
    trackInteraction('Click', 'Scrollable Buttons', '', trackingLabel, 'right arrow button');
  };

  // make the current section visible when user scrolls down (or up) by moving tab sidways (left/right)
  const handleTabMoveSideways = useCallback((id, event) => {
    const tabRef = tabRefs[id];
    // have to check ref here because the tab might not be rendered yet
    if (!tabRef || !tabRef.current) {
      return;
    }

    // clicking on tab link to scroll to a section
    if (event && event.type === 'click') {
      event && event.preventDefault(); // to avoid the link (<a> element) from performing anchor
      document.getElementById(id).scrollIntoView();
      // track clicked tab
      trackInteraction('Click', 'Scrollable Buttons', '', trackingLabel, tabRef.current.innerText);
    } else {
      // track the tab scrolled to
      trackInteraction('Scroll', 'Scrollable Buttons', '', trackingLabel, tabRef.current.innerText);
    }

    // left overflow
    const tabLeftSide = tabRef.current.getBoundingClientRect().left;
    if (tabLeftSide < 0) {
      contentRef.current.scroll({
        left: tabLeftSide + contentRef.current.scrollLeft,
        behavior: 'smooth',
      });
      return;
    }

    // right overflow
    const tabRightSide = tabRef.current.getBoundingClientRect().left + tabRef.current.offsetWidth;
    if (tabRightSide > contentRef.current.clientWidth) {
      const overflowWidth = tabRightSide - contentRef.current.clientWidth;
      // The property left in element scroll method is an absoluate value, so we need to add the overflowWidth to the current scrollLeft
      // if you want to change the value scrollLeft directly, then like this "contentRef.current.scrollLeft += overflowWidth;"
      contentRef.current.scroll({
        left: overflowWidth + contentRef.current.scrollLeft,
        behavior: 'smooth',
      });
    }
  }, [tabRefs, trackInteraction, trackingLabel]);

  useEffect(() => {
    handleTabMoveSideways(scrolledToSectionId);
  }, [handleTabMoveSideways, scrolledToSectionId]);

  const handleTabRefReady = (id, tabRef) => {
    setTabRefs((prev) => ({ ...prev, [id]: tabRef }));
  };

  return {
    showLeftArrow,
    showRightArrow,
    disableAllArrows,
    contentRef,
    leftArrowRef,
    rightArrowRef,
    handleLeftClick,
    handleRightClick,
    handleScroll,
    handleTabRefReady,
    handleTabMoveSideways,
  };
};

export default useArrowControl;
