import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledContent, StyledToggleLabel } from './ToggleLabel.styles';

const ToggleLabel = ({
  id: propsId, button, children, greyed,
}) => {
  const id = useId(propsId);
  return (
    <StyledToggleLabel htmlFor={id} greyed={greyed}>
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
  greyed: PropTypes.bool,
};

ToggleLabel.defaultProps = {
  id: null,
  button: null,
  greyed: false,
};

export default ToggleLabel;
