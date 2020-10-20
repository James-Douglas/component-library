import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './ProductContent.styles';

const ProductContent = ({
  children,
  className = '',
}) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

ProductContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductContent.defaultProps = {
  className: '',
};

export default ProductContent;
