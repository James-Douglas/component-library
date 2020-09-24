/* eslint react/forbid-prop-types: 0 */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './ProductContext';

const { Provider } = ProductContext;

const ProductProvider = ({
  product, onDetails, onSelect, children,
}) => {
  // Construct the value
  // This will be available to all components which consume this provider
  const value = useMemo(
    () => ({
      product,
      onDetails,
      onSelect,
    }),
    [product, onDetails, onSelect],
  );
  // Wrap the children with the provider and the value
  return <Provider value={value}>{children}</Provider>;
};

ProductProvider.propTypes = {
  product: PropTypes.object.isRequired,
  onDetails: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
