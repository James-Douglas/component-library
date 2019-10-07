import React from 'react';
import PropTypes from 'prop-types';

import toggleStyles from './toggle.styles';

const ToggleLabel = ({
  autofill, dirty, id, children,
}) => (
  <>
    <style jsx>{toggleStyles}</style>
    <label
      className={`toggle-label transition ${autofill && !dirty ? 'autofill' : ''}`}
      htmlFor={id}
    >
      {children}
    </label>
  </>
);

ToggleLabel.propTypes = {
  autofill: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

export default ToggleLabel;
