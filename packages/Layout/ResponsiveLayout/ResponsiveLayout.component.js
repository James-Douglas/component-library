import React from 'react';
import PropTypes from 'prop-types';
import { useBreakpoint, useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import DesktopLayout from '../DesktopLayout/DesktopLayout.component';
import MobileLayout from '../MobileLayout/MobileLayout.component';

const ResponsiveLayout = ({
  children,
  isDesktop,
  isMobile,
  is,
  isFrom,
  upTo,
  andIs,
}) => {
  const breakpoint = useBreakpoint();
  const isBreakpointRange = useIsBreakpointRange({ breakpointFrom: isFrom, breakpointTo: upTo });

  if (!andIs) return null;
  if (is && is !== breakpoint) return null;
  if (!is && !isBreakpointRange) return null;

  return (
    <>
      {isDesktop && (
        <DesktopLayout>
          {children}
        </DesktopLayout>
      )}
      {isMobile && (
        <MobileLayout>
          {children}
        </MobileLayout>
      )}
      {!isDesktop && !isMobile && children}
    </>
  );
};

ResponsiveLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /**
   * Renders on desktop only devices
   */
  isDesktop: PropTypes.bool,
  /**
   * Renders on mobile only devices
   */
  isMobile: PropTypes.bool,
  /**
   * Renders on devices that is within a breakpoint value
   */
  is: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  ]),
  /**
   * Renders on devices that are from a breakpoint value
   */
  isFrom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /**
   * Renders on devices that is up to a breakpoint value
   */
  upTo: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Additional check to render
   */
  andIs: PropTypes.bool,
};

ResponsiveLayout.defaultProps = {
  isDesktop: false,
  isMobile: false,
  is: false,
  isFrom: 'xs',
  upTo: 'lg',
  andIs: true,
};

export default ResponsiveLayout;
