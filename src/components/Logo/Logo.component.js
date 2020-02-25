import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Picture, { picturePropTypes } from '../Picture/Picture.component';
import logoMobile from '../../images/ctm-logo-mobile.svg';
import logoDesktop from '../../images/ctm-logo-desktop.svg';
import screens from '../../../config/screens';

const StyledLogo = styled.div`
  transition: all 200ms ease;

  ${({ theme, size }) => size === 'large' && css`
    height: ${theme.logo.heightLarge}; /* 44px */
  `}

  ${({ theme, size }) => size === 'small' && css`
    height: ${theme.logo.heightSmall}; /* 32px */
  `}
`;

const Logo = ({ size, link, logoPicture }) => {
  const {
    src, srcsets, alt, title, className,
  } = logoPicture;
  return (
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
  logoPicture: PropTypes.shape(picturePropTypes),
};

Logo.defaultProps = {
  link: 'https://www.comparethemarket.com.au',
  size: 'large',
  logoPicture: {
    src: logoDesktop,
    srcsets: [
      {
        srcset: logoDesktop,
        media: `(min-width: ${screens.md})`,
      },
      {
        srcset: logoMobile,
      },
    ],
  },
};

export default Logo;
