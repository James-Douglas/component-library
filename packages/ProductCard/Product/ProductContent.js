import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex: 1;
`;

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
