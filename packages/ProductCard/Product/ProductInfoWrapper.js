import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;

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
