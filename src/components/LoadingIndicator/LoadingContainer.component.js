import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';


const Loading = ({
  children,
  title,
}) => (
  <div className="loading-container">
    <style jsx>{styles}</style>
    {children}
    <h2>{title}</h2>
  </div>
);


Loading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.string,
};

Loading.defaultProps = {
  children: '<div>some loading</div>',
  title: 'Please wait... your results are on their way.',
};

export default Loading;
