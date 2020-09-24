import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductContext from '../Context/ProductContext';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.hero500};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'auto')};
`;

const Cents = styled.span`
  font-size: 0.8em;
`;

const Sup = styled.sup`
  vertical-align: text-top;
`;

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
  className = '',
  size = '5xl',
}) => {
  const { product } = useContext(ProductContext);

  const { period } = product.cost;

  const cost = product.cost.price * ((period && interval) ? multipliers[period][interval] : 1);

  const [dollars, cents] = `${cost.toFixed(2)}`.split('.');

  return (
    <Wrapper {...{ className, size, alignRight }}>
      ${dollars}
      <Cents>
        .{cents}
        {product.priceDisclaimer && <Sup>*</Sup>}
      </Cents>
    </Wrapper>
  );
};

ProductCost.propTypes = {
  interval: PropTypes.string,
  alignRight: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
};

ProductCost.defaultProps = {
  interval: null,
  alignRight: false,
  size: '5xl',
  className: '',
};

export default ProductCost;
