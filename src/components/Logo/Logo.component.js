import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './Logo.module.css';

import Picture from '../Picture/Picture.component';
import screens from '../../../config/screens';
import logoMobile from '../../../assets/images/ctm-logo-mobile.svg';
import logoDesktop from '../../../assets/images/ctm-logo-desktop.svg';

const Logo = ({ size, src, srcsets }) => {

  return (
    <div className={`${styles.logo} ${size} w-4`} id="logo">
      <a href="https://www.comparethemarket.com.au">
        <Picture
          src={src}
          srcsets={srcsets}
          alt="Compare The Market Australia Logo"
          title="Compare The Market Australia"
        />
      </a>
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  srcsets: PropTypes.arrayOf(PropTypes.shape({
    srcset: PropTypes.string,
    media: PropTypes.string,
  })),
};

Logo.defaultProps = {
  size: '',
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
