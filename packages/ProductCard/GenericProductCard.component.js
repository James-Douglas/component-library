/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@comparethemarketau/manor-card';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import ProductProvider from './Context/ProductProvider';

const GenericProductCard = ({
  product, onDetails, onSelect, padding, className, children,
}) => (
  <ProductProvider {...{
    product, onDetails, onSelect,
  }}
  >
    <Card padding={padding} className={className}>
      {children}
    </Card>
  </ProductProvider>
);

GenericProductCard.propTypes = {
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
   * Typically, product information groups specific to a vertical.
   */
  children: PropTypes.node.isRequired,
  padding: spacingPropTypes,
  className: PropTypes.string,
};

GenericProductCard.defaultProps = {
  padding: ['16'],
  className: '',
};

export default GenericProductCard;
