import React from 'react';
import { useBreakpoint, useIsDesktop } from '@comparethemarketau/manor-hooks';
import PropTypes from 'prop-types';
import Wrapper from './ProductBrandWrapper.styles';

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
