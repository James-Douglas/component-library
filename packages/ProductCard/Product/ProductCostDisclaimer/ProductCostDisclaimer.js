import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import { Wrapper, Sup, StyledTypography } from './ProductCostDisclaimer.styles';

const ProductCostDisclaimer = ({
  className = '',
  size = '2xs',
  textAlign = 'center',
}) => {
  const { product: { priceDisclaimer } } = useContext(ProductContext);
  if (!priceDisclaimer) return null;
  return (
    <Wrapper {...{ className, size }}>
      <StyledTypography variant="body2" textAlign={textAlign}><Sup>*</Sup>{priceDisclaimer}</StyledTypography>
    </Wrapper>
  );
};

ProductCostDisclaimer.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  textAlign: PropTypes.oneOf(['right', 'left', 'center', 'initial']),
};

ProductCostDisclaimer.defaultProps = {
  className: '',
  size: '2xs',
  textAlign: 'center',
};

export default ProductCostDisclaimer;
