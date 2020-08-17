import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import {
  StyledPicture,
  StyledImg,
} from './Picture.styles';

const Picture = ({
  src, srcsets, alt, title, className, theme,
}) => {
  if (!src) return null;
  return (
    <ManorProvider theme={theme}>
      <StyledPicture className={className}>
        {srcsets.map((source) => (
          <source
            srcSet={source.srcset}
            media={source.media}
            key={source.srcset}
          />
        ))}
        <StyledImg src={src} alt={alt} title={title} className={className} />
      </StyledPicture>
    </ManorProvider>
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
   * Classes to be applied to the Picture component
   */
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Picture.propTypes = picturePropTypes;

Picture.defaultProps = {
  srcsets: [],
  alt: '',
  title: '',
  className: '',
  theme: undefined,
};

export { Picture, picturePropTypes };
