import { createContext } from 'react';

const ProductContext = createContext({
  product: null,
  onDetails: (product) => {},
  onSelect: (product) => {},
});

export default ProductContext;
