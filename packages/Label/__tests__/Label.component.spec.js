import React from 'react';
import { render } from '@testing-library/react';
import Label from '../Label.component';
import 'jest-styled-components';

describe('Label', () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view',
  };

  it('renders correctly Label props', () => {
    const { getByText } = render(<Label text="Label" tooltip={tooltip} />);
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('renders correctly with tooltip prop', () => {
    const { container } = render(<Label text="Label" tooltip={tooltip} htmlFor="LabelId" fullWidth />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders correctly without tooltip prop', () => {
    const { container } = render(<Label text="Label" htmlFor="LabelId" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeInTheDocument();
  });
});
