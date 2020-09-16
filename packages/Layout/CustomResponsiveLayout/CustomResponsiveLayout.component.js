import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useBreakpoint, useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import CustomResponsiveLayoutContext from './CustomBreakpointsContext';

const CustomResponsiveLayout = ({
  children,
  is,
  isFrom,
  upTo,
  andIs,
}) => {
  const { customBreakpoints } = useContext(CustomResponsiveLayoutContext);
  const breakpoint = useBreakpoint(true, customBreakpoints);
  const breakpointFrom = isFrom && { breakpointFrom: isFrom };
  const breakpointTo = upTo && { breakpointTo: upTo };
  const options = {
    customBreakpoints,
    ...breakpointFrom,
    ...breakpointTo,
  };
  const isBreakpointRange = useIsBreakpointRange(options);

  if (!andIs) return null;
  if (is && is !== breakpoint) return null;
  if (!is && !isBreakpointRange) return null;

  return (
    <>
      {children}
    </>
  );
};

CustomResponsiveLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /**
   * Renders on devices that is within a breakpoint value
   */
  is: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  /**
   * Renders on devices that are from a breakpoint value
   */
  isFrom: PropTypes.string,
  /**
   * Renders on devices that is up to a breakpoint value
   */
  upTo: PropTypes.string,
  /**
   * Additional check to render
   */
  andIs: PropTypes.bool,
};

CustomResponsiveLayout.defaultProps = {
  is: false,
  isFrom: null,
  upTo: null,
  andIs: true,
};

export default CustomResponsiveLayout;
