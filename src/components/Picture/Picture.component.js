import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import placeholder from 'images/placeholder.png';

const styles = css`
picture {
  height: 100%;
}

img {
  height: 100%;
  object-fit: contain;
  object-position: left;
}
`;

const Picture = ({
  src, srcsets, alt, title,
}) => (
  <picture>
    {srcsets.map((source) => (
      <source
        srcSet={source.srcset}
        media={source.media}
        key={source.srcset}
      />
    ))}
    <img src={src} alt={alt} title={title} />
    <style jsx>{styles}</style>
  </picture>
);

Picture.propTypes = {
  /**
   * src attribute for the img tag
   */
  src: PropTypes.string,
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
};

Picture.defaultProps = {
  src: placeholder,
  srcsets: [],
  alt: 'a placeholder image',
  title: 'a placeholder title',
};

export default Picture;
