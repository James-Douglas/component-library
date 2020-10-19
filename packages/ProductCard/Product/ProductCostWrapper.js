import React from 'react';
import styled, { css } from 'styled-components';
import { useBreakpoint, useIsDesktop, useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';

import PropTypes from 'prop-types';

const WrapperNotDesktop = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 7.8rem;
  justify-content: space-around;
`;

const WrapperMD = css`
  flex: 1;
`;

const WrapperLG = css`
  text-align: center;
`;

const Wrapper = styled.div`
  ${({ isDesktop }) => !isDesktop && WrapperNotDesktop}
  ${({ isLGPlus }) => isLGPlus && WrapperLG}
  ${({ isMD }) => isMD && WrapperMD}
`;

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
