import React from 'react';
import { render } from '../../../../../testUtils';
import ProductCost from '../ProductCost';
import ProductTestWrapper from '../../testUtils/TestWrapper';

describe('ProductCost', () => {
  it('renders without props', () => {
    const { getByText } = render(
      <ProductTestWrapper product={{ name: 'test', cost: { price: '1.00' } }}>
        <ProductCost />
      </ProductTestWrapper>,
    );
    expect(getByText('$1')).toBeInTheDocument();
    expect(getByText('.00')).toBeInTheDocument();
  });
  it('renders with interval & period', () => {
    const { getByText } = render(
      <ProductTestWrapper product={{ name: 'test', cost: { price: '100', period: 'ANNUALLY' } }}>
        <ProductCost interval="MONTHLY" />
      </ProductTestWrapper>,
    );
    expect(getByText('$8')).toBeInTheDocument();
    expect(getByText('.33')).toBeInTheDocument();
  });
});
