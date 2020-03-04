import React from 'react';
import { render } from '../../../testUtils';
import Separator from '../Separator.component';
import 'jest-styled-components';
import theme from '../../../themes/ctm.theme';

describe('Separate', () => {
  it('renders correctly horizontal Separator', () => {
    const { container } = render(<Separator />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveStyleRule('width', '100%');
    expect(separator).toHaveStyleRule('border-bottom', `${theme.separator.border}`);
  });

  it('renders correctly vertical Separator', () => {
    const { container } = render(<Separator type="vertical" />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveStyleRule('width', '0');
    expect(separator).toHaveStyleRule('border-right', `${theme.separator.border}`);
  });
});
