import React from 'react';
import { render } from '../../../../../testUtils';
import ProductCostDisclaimer from '../ProductCostDisclaimer';
import ProductTestWrapper from '../../testUtils/TestWrapper';

describe('ProductCostDisclaimer', () => {
  it('renders nothing when disclaimer is not provided', () => {
    const { container } = render(
      <ProductTestWrapper product={{ name: 'test', priceDisclaimer: null }}>
        <ProductCostDisclaimer />
      </ProductTestWrapper>,
    );
    expect(container.innerHTML).toEqual('');
  });
  it('renders disclaimer when disclaimer provided', () => {
    const { getByText } = render(
      <ProductTestWrapper product={{ name: 'test', priceDisclaimer: 'test price disclaimer' }}>
        <ProductCostDisclaimer />
      </ProductTestWrapper>,
    );
    expect(getByText('*')).toBeInTheDocument();
    expect(getByText('test price disclaimer')).toBeInTheDocument();
  });
});
