import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { Card } from '@comparethemarketau/manor-card';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { Separator } from '@comparethemarketau/manor-separator';
import { ResponsiveLayout } from '@comparethemarketau/manor-layout';
import PropTypes from 'prop-types';
import ProductContent from './ProductContent';
import ProductBrandWrapper from './ProductBrandWrapper';
import ProductBrand from './ProductBrand';
import ProductCostWrapper from './ProductCostWrapper';
import ProductCost from './ProductCost';
import ProductSelectWrapper from './ProductSelectWrapper';
import ProductSelect from './ProductSelect';
import ProductDetails from './ProductDetails';
import ProductCostDisclaimer from './ProductCostDisclaimer';
import ProductCostInterval from './ProductCostInterval';
import ProductContext from '../Context/ProductContext';

const Wrapper = styled.div`
  flex: 1;
`;

const ChildWrapper = styled.div`
  flex: 2;
`;

const ProductSelectLG = css`
  width: 15rem;
`;

const ProductSelectStyled = styled(ProductSelect)`
  flex: 1;
  ${({ lg }) => lg && ProductSelectLG};
`;

const ProductDetailsLG = styled(ProductDetails)`
  margin-top: ${({ theme }) => theme.spacing[16]};
  text-align: center;
`;

const ProductDetailsNotDesktop = styled(ProductDetails)`
  align-self: flex-end;
  max-width: 15rem;
`;

const ProductCardSeparatorDesktop = css`
  margin-left: -${({ theme }) => theme.spacing[16]};
  margin-right: -${({ theme }) => theme.spacing[16]};
  width: auto;
`;

const ProductCardSeparator = styled.div`
  margin-top: ${({ theme }) => theme.spacing[16]};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  ${({ isDesktop }) => isDesktop && ProductCardSeparatorDesktop}
`;

const ProductCostDisclaimerMD = styled(ProductCostDisclaimer)`
  padding-left: ${({ theme }) => theme.spacing[52]};
`;

const ProductCostDisclaimerNotDesktop = styled(ProductCostDisclaimer)`
  align-self: flex-end;
  text-align: right;
  max-width: 15rem;
  padding-left: ${({ theme }) => theme.spacing[12]};
`;

const Product = ({
  children, additionalContent, productDocuments, className,
}) => {
  const isDesktop = useIsDesktop();
  const { product } = useContext(ProductContext);

  const [priceInterval, setPriceInterval] = useState(product.cost.period);
  return (
    <Card>
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
    </Card>
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
