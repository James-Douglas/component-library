import React from 'react';
import PropTypes from 'prop-types';

import toggleStyles from './toggle.styles';

const ToggleLabel = ({ id, children }) => (
  <>
    <style jsx>{toggleStyles}</style>
    <label
      className="toggle-label transition"
      htmlFor={id}
    >
      {children}
    </label>
  </>
);

ToggleLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

export default ToggleLabel;
