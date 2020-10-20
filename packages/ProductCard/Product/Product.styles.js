import styled, { css } from 'styled-components';
import ProductSelect from './ProductSelect/ProductSelect';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductCostDisclaimer from './ProductCostDisclaimer/ProductCostDisclaimer';

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

export {
  Wrapper,
  ChildWrapper,
  ProductSelectStyled,
  ProductDetailsLG,
  ProductDetailsNotDesktop,
  ProductCardSeparator,
  ProductCostDisclaimerMD,
  ProductCostDisclaimerNotDesktop,
};
