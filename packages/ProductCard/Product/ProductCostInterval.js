import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductContext from '../Context/ProductContext';

const Wrapper = styled.div`
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
`;

const Filter = styled.select`
  color: ${({ theme }) => theme.colors.primary500};
  border: none;
  background: none;
  text-align-last: right;
  font-size: inherit;
`;

const Option = styled.option`
  text-transform: capitalize;
`;

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
