import React, { useContext } from 'react';
import { useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import { Picture } from '@comparethemarketau/manor-picture';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import Wrapper from './ProductLogo.styles';

const ProductLogo = ({ className }) => {
  const isMDPlus = useIsBreakpointRange({ breakpointFrom: 'md' });
  const { product } = useContext(ProductContext);
  return (
    <Wrapper isMDPlus={isMDPlus} className={className}>
      <Picture src={product.logo} style={{ height: 'auto' }} />
    </Wrapper>
  );
};

ProductLogo.propTypes = {
  className: PropTypes.string,
};

ProductLogo.defaultProps = {
  className: '',
};

export default ProductLogo;
