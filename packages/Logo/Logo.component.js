import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Picture, picturePropTypes } from '@comparethemarketau/manor-picture';
import StyledLogo from './Logo.styles';

const Logo = ({
  size, link, picture, theme,
}) => {
  const {
    src, srcsets, alt, title, className,
  } = picture;
  return (
    <ManorProvider theme={theme}>
      <StyledLogo size={size} id="logo">
        <a href={link}>
          <Picture
            src={src}
            srcsets={srcsets}
            alt={alt}
            title={title}
            className={className}
          />
        </a>
      </StyledLogo>
    </ManorProvider>
  );
};

Logo.propTypes = {
  /**
   * Address for the <a> tag wrapping the logo image.
   */
  link: PropTypes.string,
  /**
   * Size of the logo (small = 3.2rem, large = 4.4rem)
   */
  size: PropTypes.oneOf(['small', 'large']),
  picture: PropTypes.shape(picturePropTypes).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Logo.defaultProps = {
  link: 'https://www.comparethemarket.com.au',
  size: 'large',
  theme: undefined,
};

export default Logo;
