import React, { useContext } from 'react';
import { useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import { Picture } from '@comparethemarketau/manor-picture';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import ProductLogo from '../ProductLogo/ProductLogo';
import ProductName from '../ProductName/ProductName';
import Wrapper from './ProductBrand.styles';

const ProductBrand = ({
  stacked, className,
}) => {
  const isMDPlus = useIsBreakpointRange({ breakpointFrom: 'md' });
  const isLGPlus = useIsBreakpointRange({ breakpointFrom: 'lg' });
  const { product } = useContext(ProductContext);

  return (
    <Wrapper {...{ className, isLGPlus, stacked }}>
      <ProductLogo isMDPlus={isMDPlus}>
        <Picture src={product.logo} style={{ height: 'auto' }} />
      </ProductLogo>
      <ProductName />
    </Wrapper>
  );
};

ProductBrand.propTypes = {
  stacked: PropTypes.bool,
  className: PropTypes.string,
};

ProductBrand.defaultProps = {
  stacked: false,
  className: '',
};

export default ProductBrand;
