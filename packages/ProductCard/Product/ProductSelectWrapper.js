import React from 'react';
import styled, { css } from 'styled-components';
import { useBreakpoint, useIsDesktop, useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import PropTypes from 'prop-types';

const WrapperNotDesktop = css`
  justify-content: flex-end;
`;

const WrapperMD = css`
  justify-content: space-between;
`;

const WrapperLG = css`
  align-items: center;
  flex: 2;
  justify-content: space-around;
  margin-top: -${({ theme }) => theme.spacing[16]};
  margin-left: 0;
  padding-left: 0;
  padding-right: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary50};
  padding: ${({ theme }) => theme.spacing[16]};
  margin-top: ${({ theme }) => theme.spacing[16]};
  margin-left: -${({ theme }) => theme.spacing[16]};
  margin-right: -${({ theme }) => theme.spacing[16]};
  margin-bottom: -${({ theme }) => theme.spacing[16]};
  ${({ isLGPlus }) => isLGPlus && WrapperLG};
  ${({ isMD }) => isMD && WrapperMD};
  ${({ isDesktop }) => !isDesktop && WrapperNotDesktop};
`;

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
