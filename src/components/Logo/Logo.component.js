import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Picture, { picturePropTypes } from '../Picture/Picture.component';

const StyledLogo = styled.div`
  transition: all 200ms ease;

  ${({ theme, size }) => size === 'large' && css`
    height: ${theme.logo.heightLarge}; /* 44px */
  `}

  ${({ theme, size }) => size === 'small' && css`
    height: ${theme.logo.heightSmall}; /* 32px */
  `}
`;

const Logo = ({ size, link, picture }) => {
  const {
    src, srcsets, alt, title, className,
  } = picture;
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
  picture: PropTypes.shape(picturePropTypes).isRequired,
};

Logo.defaultProps = {
  link: 'https://www.comparethemarket.com.au',
  size: 'large',
};

export default Logo;
