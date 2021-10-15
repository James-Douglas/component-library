import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Picture, picturePropTypes } from '@comparethemarketau/manor-picture';
import StyledLogo from './Logo.styles';

const Logo = ({
  size, link, picture, handleClick,
}) => {
  const {
    src, srcsets, alt, title, className,
  } = picture;
  const clickHandler = useCallback((e) => {
    if (handleClick) {
      handleClick(e);
    }
  }, [handleClick]);
  return (
    <StyledLogo size={size} id="logo">
      <a href={link} onClick={clickHandler}>
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
  handleClick: PropTypes.func,
};

Logo.defaultProps = {
  link: 'https://www.comparethemarket.com.au',
  size: 'large',
  handleClick: null,
};

export default Logo;
