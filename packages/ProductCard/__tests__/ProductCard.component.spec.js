import React from 'react';
import { render } from '../../../testUtils';
import ProductCard from '../ProductCard.component';
import logo from '../../../images/ORIGIN.png';

describe('ProductCard', () => {
  it('renders product name and logo', () => {
    const minProduct = {
      name: 'Test Product',
      logo,
      cost: { price: 123.456 },
    };

    const { container, getByText } = render(<ProductCard product={minProduct} onSelect={() => {}} onDetails={() => {}}>Nice</ProductCard>);
    expect(getByText('Test Product')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toBeDefined();
    expect(img.getAttribute('src')).toEqual('ORIGIN.png');
  });

  it('renders price & interval correctly', () => {
    const product = {
      name: 'Product',
      logo,
      cost: {
        price: 123.456,
        period: 'ANNUALLY',
        intervals: ['ANNUALLY', 'MONTHLY', 'QUARTERLY'],
      },
    };

    const { container, getByText } = render(<ProductCard product={product} onSelect={() => {}} onDetails={() => {}}>Nice</ProductCard>);
    expect(getByText((c, node) => node.textContent === '$123.46')).toBeInTheDocument();
    const costIntervals = container.querySelector('select');
    expect(costIntervals).toBeDefined();
    expect(costIntervals.value).toBe('ANNUALLY');
  });

  it('renders additional content', () => {
    const product = {
      name: 'Product',
      logo,
      cost: {
        price: 123.456,
      },
    };

    const AdditionalContent = <div>Some More Content</div>;

    const ProductDocuments = <div>Some Documents</div>;

    const { getByText } = render(
      <ProductCard productDocuments={ProductDocuments} additionalContent={AdditionalContent} product={product} onSelect={() => {}} onDetails={() => {}}>Nice</ProductCard>,
    );
    expect(getByText('Some More Content')).toBeInTheDocument();
  });
});
