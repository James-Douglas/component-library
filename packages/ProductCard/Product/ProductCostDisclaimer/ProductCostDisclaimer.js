import React, { useContext } from 'react';
import { Typography } from '@comparethemarketau/manor-typography';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import { Wrapper, Sup } from './ProductCostDisclaimer.styles';

const ProductCostDisclaimer = ({
  className = '',
  size = '2xs',
  alignRight = false,
}) => {
  const { product: { priceDisclaimer } } = useContext(ProductContext);
  if (!priceDisclaimer) return null;
  return (
    <Wrapper {...{ className, size, alignRight }}>
      <Typography variant="body2"><Sup>*</Sup>{priceDisclaimer}</Typography>
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
