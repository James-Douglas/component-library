import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import { Wrapper, Filter, Option } from './ProductCostInterval.styles';

const labels = {
  ANNUALLY: 'year',
  MONTHLY: 'month',
  QUARTERLY: 'quarter',
};

const ProductCostInterval = ({
  interval,
  setInterval,
  alignRight = false,
  className = '',
}) => {
  const { product } = useContext(ProductContext);

  const { cost: { intervals, period, intervalText } } = product;

  if (!period) return null;

  return (
    <Wrapper {...{ className, alignRight }}>
      {intervalText}
      {intervals && intervals.length > 1
        ? (
          <Filter value={interval} onChange={(e) => setInterval(e.target.value)}>
            {intervals.map((i) => <Option key={i} value={i}>{labels[i]}</Option>)}
          </Filter>
        )
        : (
          <span> {labels[interval]}</span>
        )}
    </Wrapper>
  );
};

ProductCostInterval.propTypes = {
  interval: PropTypes.string,
  setInterval: PropTypes.func,
  alignRight: PropTypes.bool,
  className: PropTypes.string,
};

ProductCostInterval.defaultProps = {
  interval: '',
  setInterval: () => {},
  alignRight: false,
  className: '',
};

export default ProductCostInterval;
