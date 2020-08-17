import React from 'react';
import PropTypes from 'prop-types';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
import { screens } from '@comparethemarketau/manor-utils';
import Logo from './Logo.component';
import CTMLogoInline from '../../images/ctm-logo-inline.svg';
import CTMLogoInlineInverted from '../../images/ctm-logo-inline-inverted.svg';
import CTMLogoStacked from '../../images/ctm-logo-stacked.svg';
import CTMLogoStackedInverted from '../../images/ctm-logo-stacked-inverted.svg';

const CTMLogo = ({
  size, inverted, className, theme,
}) => {
  const breakpoint = useBreakpoint();
  let src = CTMLogoStacked;
  if (breakpoint === 'md') {
    src = inverted ? CTMLogoStackedInverted : CTMLogoStacked;
  } else if (breakpoint !== 'xs') {
    src = inverted ? CTMLogoInlineInverted : CTMLogoInline;
  }
  return (
    <Logo
      size={size}
      link="https://www.comparethemarket.com.au"
      picture={{
        src,
        srcsets: [
          {
            srcset: inverted ? CTMLogoStackedInverted : CTMLogoStacked,
            media: `(max-width: ${screens.lg}`,
          },
          {
            srcset: inverted ? CTMLogoInlineInverted : CTMLogoInline,
          },
        ],
        className,
      }}
      theme={theme}
    />
  );
};

CTMLogo.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  inverted: PropTypes.bool,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

CTMLogo.defaultProps = {
  size: 'large',
  inverted: false,
  className: '',
  theme: undefined,
};

export default CTMLogo;
