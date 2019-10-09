import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

const styles = css`
  .field-validation {
    @apply bg-validation-background text-validation-text absolute z-10 mt-8 px-8 py-4;
  }
`;

const FieldValidation = ({ message }) => {
  if (!message || !message.length) return null;
  return (
    <div className="field-validation manor-body1">
      {message}
    </div>
  );
};

FieldValidation.propTypes = {
  message: PropTypes.string,
};

FieldValidation.defaultProps = {
  message: null,
};

export default FieldValidation;
