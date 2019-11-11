import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => (
  <div className={`row ${className}`} jsx="true">
    {children}
    <style jsx="true">
      {`.row {
        @apply flex flex-wrap -mx-16;
      }
      `}
    </style>
  </div>
);

Row.propTypes = {
  /**
   * Classes to be applied to the row element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Row.defaultProps = {
  className: '',
  children: [],
};

export default Row;
