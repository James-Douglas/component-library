import React from 'react';
import PropTypes from 'prop-types';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { ScrollableButtons } from '@comparethemarketau/manor-buttongroup';

import useCurrentSection from './hooks/useCurrentSection';
import StickyBarContainer from './ScrollableNavigation.style';

const ScrollableNavigation = ({
  trackingLabel, sections, scrollMargin, stickyBarElementId, isSticky, zIndex,
}) => {
  const { ref, currentTopSectionId, firstSectionId } = useCurrentSection(sections, scrollMargin);
  return (
    <StickyBarContainer id={stickyBarElementId} ref={ref} isSticky={isSticky} zIndex={zIndex}>
      <ScrollableButtons trackingLabel={trackingLabel} selectedId={currentTopSectionId || firstSectionId} buttons={sections} />
    </StickyBarContainer>

  );
};

ScrollableNavigation.defaultProps = {
  stickyBarElementId: 'policy-product-sticky-bar',
  isSticky: false,
  zIndex: parseInt(ctmTheme.zIndex[10], 10),
};

ScrollableNavigation.propTypes = {
  /** A descriptive label used in tracking user interactions with this component */
  trackingLabel: PropTypes.string.isRequired,
  /** An array of the navigation tab name and the relative sections' id */
  sections: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    navigateToElementId: PropTypes.string,
    handleClick: PropTypes.func,
    href: PropTypes.string,
  })).isRequired,
  /** scroll margin top value */
  scrollMargin: PropTypes.number.isRequired,
  /** Scrollabe navigation bar's id */
  stickyBarElementId: PropTypes.string,
  /** Defines if the navigation bar is sticky via boolean */
  isSticky: PropTypes.bool,
  /** zIndex for the navigation bar */
  zIndex: PropTypes.number,
};

export default ScrollableNavigation;
