import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import StyledProgressIcon from './ProgressIcon.styles';

const ProgressIcon = ({
  disabled,
  active,
  mobile,
  index,
  theme,
}) => (
  <ManorProvider theme={theme}>
    <StyledProgressIcon active={active} disabled={disabled} mobile={mobile}>{index}</StyledProgressIcon>
  </ManorProvider>
);

ProgressIcon.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  mobile: PropTypes.bool,
  index: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

ProgressIcon.defaultProps = {
  disabled: false,
  active: false,
  mobile: false,
  index: 1,
  theme: undefined,
};

export default ProgressIcon;
