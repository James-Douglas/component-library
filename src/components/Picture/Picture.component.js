import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './Picture.module.css';

const Picture = ({
  src, srcsets, alt, title,
}) => (
  <picture>
    {srcsets.map((srcset) => <source srcSet={srcset} key={srcset} />)}
    <img src={src} alt={alt} title={title} />
  </picture>
);

Picture.propTypes = {
  src: PropTypes.string,
  srcsets: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string,
  title: PropTypes.string,
};

Picture.defaultProps = {
  // eslint-disable-next-line global-require
  src: require('../../../assets/images/placeholder.png'),
  srcsets: [],
  alt: 'a placeholder image',
  title: 'a placeholder title',
};

export default Picture;
