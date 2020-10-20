import React from 'react';
import { fireEvent, render } from '../../../../../testUtils';
import ProductDetails from '../ProductDetails';
import ProductTestWrapper from '../../testUtils/TestWrapper';

describe('ProductDetails', () => {
  it('renders', () => {
    const { container } = render(
      <ProductTestWrapper product={{ name: 'test' }}>
        <ProductDetails className="test" />
      </ProductTestWrapper>,
    );
    expect(container.querySelector('.test')).toBeInTheDocument();
    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link.innerHTML).toContain('Product details');
  });
  it('calls onDetails on click', () => {
    const detailsHandler = jest.fn();
    const { container } = render(
      <ProductTestWrapper product={{ name: 'test' }} onDetails={detailsHandler}>
        <ProductDetails className="test" />
      </ProductTestWrapper>,
    );
    const link = container.querySelector('a');
    fireEvent.click(link);
    expect(detailsHandler).toHaveBeenCalled();
  });
});
