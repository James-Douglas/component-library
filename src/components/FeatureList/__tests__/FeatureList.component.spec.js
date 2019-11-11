import React from 'react';
import { render } from '@testing-library/react';
import FeatureList from '../FeatureList.component';

describe('featureList', () => {
  it('renders with items', () => {
    const { container } = render(<FeatureList features={['a', 'b', 'c']} />);
    const ul = container.querySelector('ul');
    expect(ul).toBeInTheDocument();
    expect(ul).toHaveClass('manor-feature-list');
    const liItems = container.querySelectorAll('li');
    expect(liItems).toHaveLength(3);
    const a = liItems[0];
    expect(a.children).toHaveLength(2);
    expect(a.children[0]).toHaveClass('feature-list-item-icon');
    expect(a.children[1]).toHaveClass('feature-list-item-text');
  });
});
