import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';

import SourceSansProSrc from '../../fonts/sourcesanspro-regular-webfont.woff2';
import SourceSansProUrl from '../../fonts/sourcesanspro-regular-webfont.woff';

import SourceSansProSemiBoldSrc from '../../fonts/sourcesanspro-semibold-webfont.woff2';
import SourceSansProSemiBoldUrl from '../../fonts/sourcesanspro-semibold-webfont.woff';

import SourceSansProBoldSrc from '../../fonts/sourcesanspro-bold-webfont.woff2';
import SourceSansProBoldUrl from '../../fonts/sourcesanspro-bold-webfont.woff';

const GlobalFontStyles = createGlobalStyle`
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProSrc}) format('woff2'),
    url(${SourceSansProUrl}) format('woff');
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProSemiBoldSrc}) format('woff2'),
    url(${SourceSansProSemiBoldUrl}) format('woff');
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProBoldSrc}) format('woff2'),
    url(${SourceSansProBoldUrl}) format('woff');
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-style: normal;
  }
`;

const Fonts = ({ theme }) => (
  <GlobalFontStyles theme={theme} />
);

Fonts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Fonts.defaultProps = {
  theme: ctmTheme,
};

export default Fonts;
