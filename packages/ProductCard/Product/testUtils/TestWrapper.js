import React from 'react';
import ProductProvider from '../../Context/ProductProvider';

const ProductTestWrapper = ({
  // eslint-disable-next-line react/prop-types
  children, product, onDetails = () => {}, onSelect = () => {},
}) => (
  <ProductProvider product={product} onDetails={onDetails} onSelect={onSelect}>
    { children }
  </ProductProvider>
);

export default ProductTestWrapper;
