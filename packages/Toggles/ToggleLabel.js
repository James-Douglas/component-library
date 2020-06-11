import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledContent, StyledToggleLabel } from './ToggleLabel.styles';

const ToggleLabel = ({ id: propsId, button, children }) => {
  const id = useId(propsId);
  return (
    <StyledToggleLabel htmlFor={id}>
      <StyledContent button={button}>{children}</StyledContent>
    </StyledToggleLabel>
  );
};

ToggleLabel.propTypes = {
  id: PropTypes.string,
  button: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

ToggleLabel.defaultProps = {
  id: null,
  button: null,
};

export default ToggleLabel;
