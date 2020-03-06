import React from 'react';
import { render } from '../../../testUtils';
import Logo from '../Logo.component';
import theme from '../../../themes/ctm.theme';
import CTMLogoInline from '../../../images/ctm-logo-inline.svg';
import CTMLogoStacked from '../../../images/ctm-logo-stacked.svg';
import CTMLogoMobile from '../../../images/ctm-logo-mobile.svg';
import screens from '../../../../config/screens';

describe('Logo', () => {
  const pictureProps = {
    src: CTMLogoMobile,
    srcsets: [
      {
        srcset: CTMLogoMobile,
        media: `(max-width: ${screens.xs}`,
      },
      {
        srcset: CTMLogoStacked,
        media: `(max-width: ${screens.lg}`,
      },
      {
        srcset: CTMLogoInline,
      },
    ],
  };

  it('renders correctly with minimal props', () => {
    const { container } = render(<Logo picture={pictureProps} />);
    expect(container.innerHTML).toMatchSnapshot();

    const a = container.querySelector('a');
    expect(a).toBeDefined();
    expect(a.getAttribute('href')).toBe('https://www.comparethemarket.com.au');

    const sources = container.querySelectorAll('source');
    expect(sources).toBeDefined();
    expect(sources[0].getAttribute('srcset')).toEqual('ctm-logo-mobile.svg');
    expect(sources[1].getAttribute('srcset')).toEqual('ctm-logo-stacked.svg');
    expect(sources[2].getAttribute('srcset')).toEqual('ctm-logo-inline.svg');
  });

  it('renders a small logo', () => {
    const { container } = render(<Logo size="small" picture={pictureProps} />);
    expect(container.querySelector('#logo')).toHaveStyle(`height: ${theme.logo.heightSmall}`);
  });
});
