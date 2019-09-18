import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './Picture.module.css';

const Picture = ({ src, srcsets, alt, title }) => {
  return (
    <picture>
      {srcsets.map((srcset) => <source {...srcset} />)}
      <img src={src} alt={alt} title={title} />
    </picture>
  );
};

Picture.propTypes = {
  src: PropTypes.string,
  srcsets: PropTypes.array,
  alt: PropTypes.string,
  title: PropTypes.string,
};

Picture.defaultProps = {
  src: require('../../../assets/images/placeholder.png'),
  srcsets: [],
  alt: 'a placeholder image',
  title: 'a placeholder title',
};

export default Picture;
