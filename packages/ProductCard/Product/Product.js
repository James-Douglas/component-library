import React, { useContext, useState } from 'react';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { Separator } from '@comparethemarketau/manor-separator';
import { ResponsiveLayout } from '@comparethemarketau/manor-layout';
import PropTypes from 'prop-types';
import ProductContent from './ProductContent/ProductContent';
import ProductBrandWrapper from './ProductBrandWrapper/ProductBrandWrapper';
import ProductBrand from './ProductBrand/ProductBrand';
import ProductCostWrapper from './ProductCostWrapper/ProductCostWrapper';
import ProductCost from './ProductCost/ProductCost';
import ProductSelectWrapper from './ProductSelectWrapper/ProductSelectWrapper';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductCostDisclaimer from './ProductCostDisclaimer/ProductCostDisclaimer';
import ProductCostInterval from './ProductCostInterval/ProductCostInterval';
import ProductContext from '../Context/ProductContext';
import {
  Wrapper,
  ChildWrapper,
  ProductSelectStyled,
  ProductDetailsLG,
  ProductDetailsNotDesktop,
  ProductCardSeparator,
  ProductCostDisclaimerMD,
  ProductCostDisclaimerNotDesktop,
} from './Product.styles';

const Product = ({
  children, additionalContent, productDocuments, className,
}) => {
  const isDesktop = useIsDesktop();
  const { product } = useContext(ProductContext);

  const [priceInterval, setPriceInterval] = useState(product.cost.period);
  return (
    <Wrapper className={className}>
      <ProductContent>
        <ProductBrandWrapper>
          <ProductBrand />
          {productDocuments && (
            <ResponsiveLayout isFrom="lg">
              {productDocuments}
            </ResponsiveLayout>
          )}
        </ProductBrandWrapper>

        <ChildWrapper>{children}</ChildWrapper>

        <ResponsiveLayout isDesktop upTo="md">
          <ProductCostWrapper>
            <ProductCostInterval alignRight interval={priceInterval} setInterval={setPriceInterval} />
            <ProductCost interval={priceInterval} alignRight />
            <ProductCostDisclaimerMD alignRight />
          </ProductCostWrapper>
        </ResponsiveLayout>

        <ResponsiveLayout isDesktop isFrom="lg">
          <ProductSelectWrapper>
            <ProductCostWrapper>
              <ProductCost interval={priceInterval} />
              <ProductCostDisclaimer size="xs" />
            </ProductCostWrapper>
            <div>
              <ProductSelectStyled />
              <ProductDetailsLG />
            </div>
          </ProductSelectWrapper>
        </ResponsiveLayout>
      </ProductContent>

      {additionalContent && (
        <>
          <ProductCardSeparator isDesktop={isDesktop}>
            <Separator noSpacing />
          </ProductCardSeparator>
          <ProductContent>{additionalContent}</ProductContent>
        </>
      )}

      <ResponsiveLayout isMobile>
        <ProductCardSeparator>
          <Separator noSpacing />
        </ProductCardSeparator>

        <ProductCostWrapper>
          <ProductCostInterval interval={priceInterval} setInterval={setPriceInterval} />
          <ProductCost interval={priceInterval} />
          <ProductCostDisclaimerNotDesktop />
          <ProductDetailsNotDesktop />
        </ProductCostWrapper>

        <ProductSelectWrapper>
          <ProductSelectStyled />
        </ProductSelectWrapper>
      </ResponsiveLayout>

      <ResponsiveLayout isDesktop upTo="md">
        <ProductSelectWrapper>
          <ProductDetails />
          <ProductSelectStyled />
        </ProductSelectWrapper>
      </ResponsiveLayout>
    </Wrapper>
  );
};

Product.propTypes = {
  children: PropTypes.node.isRequired,
  additionalContent: PropTypes.node,
  productDocuments: PropTypes.node,
  className: PropTypes.string,
};

Product.defaultProps = {
  additionalContent: null,
  productDocuments: null,
  className: '',
};

export default Product;
