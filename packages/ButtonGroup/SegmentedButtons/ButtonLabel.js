import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledContent, StyledButtonLabel } from './ButtonLabel.styles';

const ButtonLabel = ({ id: propsId, button, children }) => {
  const id = useId(propsId);
  return (
    <StyledButtonLabel htmlFor={id}>
      <StyledContent button={button}>{children}</StyledContent>
    </StyledButtonLabel>
  );
};

ButtonLabel.propTypes = {
  id: PropTypes.string,
  button: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

ButtonLabel.defaultProps = {
  id: null,
  button: null,
};

export default ButtonLabel;
