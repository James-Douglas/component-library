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
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toContain('Product details');
  });
  it('calls onDetails on click', () => {
    const detailsHandler = jest.fn();
    const { container } = render(
      <ProductTestWrapper product={{ name: 'test' }} onDetails={detailsHandler}>
        <ProductDetails className="test" />
      </ProductTestWrapper>,
    );
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(detailsHandler).toHaveBeenCalled();
  });
});
