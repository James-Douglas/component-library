import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductContext from '../Context/ProductContext';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: 0.8em;
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'auto')};
`;

const Sup = styled.sup`
  text-align: right;
`;

const ProductCostDisclaimer = ({
  className = '',
  size = '2xs',
  alignRight = false,
}) => {
  const { product: { priceDisclaimer } } = useContext(ProductContext);
  if (!priceDisclaimer) return null;
  return (
    <Wrapper {...{ className, size, alignRight }}>
      <Sup>*</Sup>{priceDisclaimer}
    </Wrapper>
  );
};

ProductCostDisclaimer.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  alignRight: PropTypes.bool,
};

ProductCostDisclaimer.defaultProps = {
  className: '',
  size: '2xs',
  alignRight: false,
};

export default ProductCostDisclaimer;
