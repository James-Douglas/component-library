import React, { useContext } from 'react';
import { useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import Wrapper from './ProductName.styles';

const ProductName = ({ variant, className }) => {
  const isLGPlus = useIsBreakpointRange({ breakpointFrom: 'lg' });
  const { product } = useContext(ProductContext);

  return (
    <Wrapper {...{ className, isLGPlus }}>
      <Typography variant={variant}>
        {product.name}
      </Typography>
    </Wrapper>
  );
};

ProductName.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

ProductName.defaultProps = {
  variant: 'h4',
  className: '',
};

export default ProductName;
