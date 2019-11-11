import React from 'react';
import { render } from '@testing-library/react';
import Separator from '../Separator.component';

describe('Separate', () => {
  it('renders correctly horizontal Separator', () => {
    const { container } = render(<Separator />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveClass('horizontal');
  });
  it('renders correctly vertical Separator', () => {
    const { container } = render(<Separator type="vertical" />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveClass('vertical');
  });
});
