import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './ProductInfoWrapper.styles';

const ProductInfoWrapper = ({
  children,
  className = '',
}) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

ProductInfoWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductInfoWrapper.defaultProps = {
  className: '',
};

export default ProductInfoWrapper;
