import React from 'react';
import styled, { css } from 'styled-components';
import { useBreakpoint, useIsDesktop } from '@comparethemarketau/manor-hooks';
import PropTypes from 'prop-types';

const WrapperNotXS = css`
  margin-right: ${({ theme }) => theme.spacing[10]};
`;

const WrapperDesktop = css`
  flex: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  ${({ isDesktop }) => isDesktop && WrapperDesktop}
  ${({ notXS }) => notXS && WrapperNotXS}
`;

const ProductBrandWrapper = ({
  children,
  className = '',
}) => {
  const isDesktop = useIsDesktop();
  const notXS = useBreakpoint !== 'xs';
  return (
    <Wrapper {...{ className, isDesktop, notXS }}>
      {children}
    </Wrapper>
  );
};

ProductBrandWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductBrandWrapper.defaultProps = {
  className: '',
};

export default ProductBrandWrapper;
