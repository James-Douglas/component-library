import React from 'react';
import { render } from '../../../testUtils';
import Separator from '../Separator.component';
import 'jest-styled-components';

describe('Separate', () => {
  it('renders correctly horizontal Separator', () => {
    const { container } = render(<Separator />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveStyleRule('width', '100%');
  });
  it('renders correctly vertical Separator', () => {
    const { container } = render(<Separator type="vertical" />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveStyleRule('width', '0');
  });
});
