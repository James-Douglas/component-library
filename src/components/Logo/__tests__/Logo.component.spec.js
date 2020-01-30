import React from 'react';
import { render } from '../../../testUtils';
import Logo from '../Logo.component';

import getTheme from '../../../utils/getTheme';

const theme = getTheme();

describe('Logo', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Logo />);
    expect(container.innerHTML).toMatchSnapshot();

    const a = container.querySelector('a');
    expect(a).toBeDefined();
    expect(a.getAttribute('href')).toBe('https://www.comparethemarket.com.au');

    const sources = container.querySelectorAll('source');
    expect(sources).toBeDefined();
    expect(sources[0].getAttribute('srcset')).toEqual('ctm-logo-desktop.svg');
    expect(sources[1].getAttribute('srcset')).toEqual('ctm-logo-mobile.svg');
  });

  it('renders a small logo', () => {
    const { container } = render(<Logo size="small" />);
    expect(container.querySelector('#logo')).toHaveStyle(`height: ${theme.logo.heightSmall}`);
  });
});
