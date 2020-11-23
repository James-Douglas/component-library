/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import ProductContext from '../../Context/ProductContext';
import {
  Wrapper, Cents, Sup, StyledTooltip,
} from './ProductCost.styles';

const multipliers = {
  ANNUALLY: {
    ANNUALLY: 1,
    QUARTERLY: 0.25,
    MONTHLY: 0.0833,
  },
  MONTHLY: {
    MONTHLY: 1,
    ANNUALLY: 12,
    QUARTERLY: 3,
  },
  QUARTERLY: {
    QUARTERLY: 1,
    ANNUALLY: 4,
    MONTHLY: 0.3333,
  },
};

const ProductCost = ({
  interval,
  alignRight = false,
  padding,
  className = '',
  size = '5xl',
  tooltip,
  tooltipVerticalAlign = 'top',
}) => {
  const { product } = useContext(ProductContext);

  const { period } = product.cost;

  const cost = product.cost.price * ((period && interval) ? multipliers[period][interval] : 1);

  const [dollars, cents] = `${cost.toFixed(2)}`.split('.');

  return (
    <Wrapper {...{
      className, size, alignRight, padding,
    }}
    >
      ${dollars}
      <Cents>
        .{cents}
        {product.priceDisclaimer && <Sup>*</Sup>}
      </Cents>
      {tooltip && <StyledTooltip {...tooltip} verticalAlign={tooltipVerticalAlign} />}
    </Wrapper>
  );
};

ProductCost.propTypes = {
  interval: PropTypes.string,
  alignRight: PropTypes.bool,
  size: PropTypes.string,
  padding: spacingPropTypes,
  className: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  tooltipVerticalAlign: PropTypes.oneOf(['top', 'baseline']),
};

ProductCost.defaultProps = {
  interval: null,
  alignRight: false,
  size: '5xl',
  padding: ['12', '0', '0', '0'],
  className: '',
  tooltip: {},
  tooltipVerticalAlign: 'top',
};

export default ProductCost;
