import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import Picture from '../Picture/Picture.component';
import logoMobile from '../../images/ctm-logo-mobile.svg';
import logoDesktop from '../../images/ctm-logo-desktop.svg';

const styles = css`
  .logo {
    transition: all 200ms ease;
  }

  .logo.large {
    height: 4.4rem; /* 44px */
  }

  .logo.small {
    height: 3.2rem; /* 32px */
  }
`;

const Logo = ({ size, src, srcsets }) => (
  <div className={`logo ${size}`} id="logo">
    <a href="https://www.comparethemarket.com.au">
      <Picture
        src={src}
        srcsets={srcsets}
        alt="Compare The Market Australia Logo"
        title="Compare The Market Australia"
      />
    </a>
    <style jsx>{styles}</style>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  srcsets: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string,
      media: PropTypes.string,
    }),
  ),
};

Logo.defaultProps = {
  size: '',
  src: logoDesktop,
  srcsets: [
    {
      srcset: logoDesktop,
    },
    {
      srcset: logoMobile,
    },
  ],
};

export default Logo;
