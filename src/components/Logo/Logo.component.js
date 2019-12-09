import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Picture from '../Picture/Picture.component';
import logoMobile from '../../images/ctm-logo-mobile.svg';
import logoDesktop from '../../images/ctm-logo-desktop.svg';
import screens from '../../../config/screens';

const StyledLogo = styled.div`
  transition: all 200ms ease;

  ${(props) => props.size === 'large' && css`
    height: 4.4rem; /* 44px */
  `}

  ${(props) => props.size === 'small' && css`
    height: 3.2rem; /* 32px */
  `}
`;

const Logo = ({ size, src, srcsets }) => (
  <StyledLogo size={size} id="logo">
    <a href="https://www.comparethemarket.com.au">
      <Picture
        src={src}
        srcsets={srcsets}
        alt="Compare The Market Australia Logo"
        title="Compare The Market Australia"
      />
    </a>
  </StyledLogo>
);

Logo.propTypes = {
  /**
   * Size of the logo (small = 3.2rem, large = 4.4rem)
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * src attribute for the underlying Picture component
   */
  src: PropTypes.string,
  /**
   * srcsets attribute for the underlying Picture component
   */
  srcsets: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string,
      media: PropTypes.string,
    }),
  ),
};

Logo.defaultProps = {
  size: 'large',
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
};

export default Logo;
