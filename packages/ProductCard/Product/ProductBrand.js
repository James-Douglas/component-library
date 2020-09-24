import React, { useContext } from 'react';
import styled from 'styled-components';
import { useIsBreakpointRange } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
import { Picture } from '@comparethemarketau/manor-picture';
import PropTypes from 'prop-types';
import ProductContext from '../Context/ProductContext';

const Wrapper = styled.div`
  display: ${({ isLGPlus }) => (isLGPlus ? 'flex' : 'block')};
`;

const ProductLogo = styled.div`
  height: ${({ theme, isMDPlus }) => theme.spacing[!isMDPlus ? 28 : 60]};
  flex: 0 0 ${({ theme }) => theme.spacing[60]};
  margin-right: ${({ theme }) => theme.spacing[16]};
`;

const ProductName = styled.div`
  margin-top: ${({ theme, isLGPlus }) => !isLGPlus && theme.spacing[16]};
`;

const ProductBrand = ({
  className,
}) => {
  const isMDPlus = useIsBreakpointRange({ breakpointFrom: 'md' });
  const isLGPlus = useIsBreakpointRange({ breakpointFrom: 'lg' });
  const { product } = useContext(ProductContext);

  return (
    <Wrapper {...{ className, isLGPlus }}>
      <ProductLogo isMDPlus={isMDPlus}>
        <Picture src={product.logo} style={{ height: 'auto' }} />
      </ProductLogo>
      <ProductName isLGPlus={isLGPlus}>
        <Typography variant="h4">
          {product.name}
        </Typography>
      </ProductName>
    </Wrapper>
  );
};

ProductBrand.propTypes = {
  className: PropTypes.string,
};

ProductBrand.defaultProps = {
  className: '',
};

export default ProductBrand;
