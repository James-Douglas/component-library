import React from 'react';
import PropTypes from 'prop-types';
import useId from '../../hooks/useId';
import { StyledContent, StyledToggleLabel } from './ToggleLabel.styles';

const ToggleLabel = ({ id: propsId, children }) => {
  const id = useId(propsId);
  return (
    <StyledToggleLabel htmlFor={id}>
      <StyledContent>{children}</StyledContent>
    </StyledToggleLabel>
  );
};

ToggleLabel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

ToggleLabel.defaultProps = {
  id: null,
};

export default ToggleLabel;
