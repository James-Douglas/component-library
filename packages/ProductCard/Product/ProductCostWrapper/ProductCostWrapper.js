import React from 'react';
import PropTypes from 'prop-types';
import { useBreakpoint, useIsDesktop, useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
import Wrapper from './ProductCostWrapper.styles';

const ProductCostWrapper = ({
  children,
  className = '',
}) => {
  const isDesktop = useIsDesktop();
  const breakpoint = useBreakpoint();
  const isMD = breakpoint === 'md';
  const isLGPlus = useIsBreakpointRange({ breakpointFrom: 'lg' });
  return (
    <Typography component="div" variant="body1">
      <Wrapper {...{
        className, isDesktop, isMD, isLGPlus,
      }}
      >
        {children}
      </Wrapper>
    </Typography>
  );
};

ProductCostWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductCostWrapper.defaultProps = {
  className: '',
};

export default ProductCostWrapper;
