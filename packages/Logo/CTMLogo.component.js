import React from 'react';
import PropTypes from 'prop-types';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
import { screens } from '@comparethemarketau/manor-utils';
import Logo from './Logo.component';
import CTMLogoInline from '../../images/ctm-logo-inline.svg';
import CTMLogoInlineInverted from '../../images/ctm-logo-inline-inverted.svg';
import CTMLogoStacked from '../../images/ctm-logo-stacked.svg';
import CTMLogoStackedInverted from '../../images/ctm-logo-stacked-inverted.svg';
import CTMLogoMobile from '../../images/ctm-logo-mobile.svg';

const CTMLogo = ({ size, inverted, className }) => {
  const breakpoint = useBreakpoint();
  let src = CTMLogoMobile;
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
            srcset: CTMLogoMobile,
            media: `(max-width: ${screens.xs}`,
          },
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
    />
  );
};

CTMLogo.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  inverted: PropTypes.bool,
  className: PropTypes.string,
};

CTMLogo.defaultProps = {
  size: 'large',
  inverted: false,
  className: '',
};

export default CTMLogo;
