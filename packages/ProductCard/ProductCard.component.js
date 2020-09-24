/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product/Product';
import ProductInfoWrapper from './Product/ProductInfoWrapper';
import ProductProvider from './Context/ProductProvider';

const ProductCard = ({
  product, onDetails, onSelect, additionalContent, productDocuments, children,
}) => (
  <ProductProvider {...{
    product, onDetails, onSelect,
  }}
  >
    <Product {...{ additionalContent, productDocuments }}>
      <ProductInfoWrapper>
        {children}
      </ProductInfoWrapper>
    </Product>
  </ProductProvider>
);

ProductCard.propTypes = {
  /**
   * Core product info to be rendered.
   */
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    cost: PropTypes.shape({
      price: PropTypes.number.isRequired,
      period: PropTypes.string,
      intervals: PropTypes.arrayOf(PropTypes.string),
      intervalText: PropTypes.string,
    }),
    priceDisclaimer: PropTypes.string,
  }).isRequired,
  /**
   * Handler for pressing the "More Details" button.
   */
  onDetails: PropTypes.func.isRequired,
  /**
   * Handler for selecting a product.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Extra content to render under the main card.
   */
  additionalContent: PropTypes.node,
  /**
   * Link to supplimental product information.
   */
  productDocuments: PropTypes.node,
  /**
   * Typically, product information groups specific to a vertical.
   */
  children: PropTypes.node.isRequired,
};

ProductCard.defaultProps = {
  additionalContent: null,
  productDocuments: null,
};

export default ProductCard;
