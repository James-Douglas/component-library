import React from 'react';
import { useBreakpoint, useIsDesktop, useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import PropTypes from 'prop-types';
import Wrapper from './ProductSelectWrapper.styles';

const ProductSelectWrapper = ({
  children,
  className = '',
}) => {
  const isDesktop = useIsDesktop();
  const breakpoint = useBreakpoint();
  const isMD = breakpoint === 'md';
  const isLGPlus = useIsBreakpointRange({ breakpointFrom: 'lg' });
  return (
    <Wrapper {...{
      className, isDesktop, isMD, isLGPlus,
    }}
    >
      {children}
    </Wrapper>
  );
};

ProductSelectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductSelectWrapper.defaultProps = {
  className: '',
};

export default ProductSelectWrapper;
