import React from 'react';
import { render } from '../../../../../testUtils';
import ProductBrand from '../ProductBrand';
import originLogo from '../../../../../images/ORIGIN.png';
import ProductTestWrapper from '../../testUtils/TestWrapper';

describe('ProductBrand', () => {
  it('renders without props', () => {
    const { container, getByText } = render(
      <ProductTestWrapper product={{ name: 'test', logo: originLogo }}>
        <ProductBrand />
      </ProductTestWrapper>,
    );
    const logo = container.querySelector('picture');
    expect(logo).toBeInTheDocument();
    expect(logo.firstChild).toHaveAttribute('src', 'ORIGIN.png');
    expect(getByText('test')).toBeInTheDocument();
  });
});
