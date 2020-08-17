import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledContent, StyledToggleLabel } from './ToggleLabel.styles';

const ToggleLabel = ({
  id: propsId, button, children, theme,
}) => {
  const id = useId(propsId);
  return (
    <ManorProvider theme={theme}>
      <StyledToggleLabel htmlFor={id}>
        <StyledContent button={button}>{children}</StyledContent>
      </StyledToggleLabel>
    </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

ToggleLabel.defaultProps = {
  id: null,
  button: null,
  theme: undefined,
};

export default ToggleLabel;
