import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPicture,
  StyledImg,
} from './Picture.styles';

const Picture = ({
  src, srcsets, alt, title, imgPosition, className,
}) => {
  if (!src) return null;
  return (
    <StyledPicture className={className}>
      {srcsets.map((source) => (
        <source
          srcSet={source.srcset}
          media={source.media}
          key={source.srcset}
        />
      ))}
      <StyledImg src={src} alt={alt} title={title} imgPosition={imgPosition} className={className} />
    </StyledPicture>
  );
};

const picturePropTypes = {
  /**
   * src attribute for the img tag
   */
  src: PropTypes.string.isRequired,
  /**
   * srcsets attribute for the picture tag
   */
  srcsets: PropTypes.arrayOf(PropTypes.shape({
    srcset: PropTypes.string,
    media: PropTypes.string,
  })),
  /**
   * alt text
   */
  alt: PropTypes.string,
  /**
   * title text
   */
  title: PropTypes.string,
  /**
   * set the object-position property
   */
  imgPosition: PropTypes.oneOf(['bottom', 'center', 'inherit', 'initial', 'left', 'revert', 'right', 'top', 'unset']),
  /**
   * Classes to be applied to the Picture component
   */
  className: PropTypes.string,
};

Picture.propTypes = picturePropTypes;

Picture.defaultProps = {
  srcsets: [],
  alt: '',
  title: '',
  imgPosition: 'left',
  className: '',
};

export { Picture, picturePropTypes };
