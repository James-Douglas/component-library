import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render } from '../../../testUtils';
import Separator from '../Separator.component';

describe('Separate', () => {
  it('renders correctly horizontal Separator', () => {
    const { container } = render(<Separator />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveStyleRule('width', '100%');
    expect(separator).toHaveStyleRule('border-bottom', `${ctmTheme.separator.border}`);
  });

  it('renders correctly vertical Separator', () => {
    const { container } = render(<Separator type="vertical" />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).toHaveStyleRule('width', '0');
    expect(separator).toHaveStyleRule('border-right', `${ctmTheme.separator.border}`);
  });

  it('renders with no spacing', () => {
    const { container } = render(<Separator noSpacing />);
    const separator = container.getElementsByTagName('hr')[0];
    expect(separator).not.toHaveStyleRule('margin');
  });
});
