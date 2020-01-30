import React from 'react';
import { render } from '../../../testUtils';
import FeatureList from '../FeatureList.component';

describe('featureList', () => {
  it('renders with items', () => {
    const { container } = render(<FeatureList features={['a', 'b', 'c']} />);
    const ul = container.querySelector('ul');
    const liItems = container.querySelectorAll('li');
    const Icon = container.querySelector('svg');
    const a = liItems[0];

    expect(ul).toBeInTheDocument();
    expect(ul).toHaveStyle('margin-left: 0');
    expect(liItems).toHaveLength(3);
    expect(a.children).toHaveLength(2);
    expect(Icon).toBeInTheDocument();
    expect(a.children[0]).toHaveStyle('flex-direction: column');
  });
});
