import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { ManorContext } from '@comparethemarketau/manor-provider';
import Logo from './Logo.component';
import CTMLogoInline from '../../images/ctm-logo-inline.svg';
import CTMLogoInlineInverted from '../../images/ctm-logo-inline-inverted.svg';
import CTMLogoStacked from '../../images/ctm-logo-stacked.svg';
import CTMLogoStackedInverted from '../../images/ctm-logo-stacked-inverted.svg';

const CTMLogo = ({
  size, inverted, className,
}) => {
  const theme = useContext(ThemeContext);
  const { breakpoint } = useContext(ManorContext);
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
            media: `(max-width: ${theme.breakpoints.lg}`,
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
