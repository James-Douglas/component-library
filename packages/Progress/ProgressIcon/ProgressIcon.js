import React from 'react';
import PropTypes from 'prop-types';
import StyledProgressIcon from './ProgressIcon.styles';

const ProgressIcon = ({
  disabled,
  active,
  mobile,
  index,
}) => (
  <StyledProgressIcon active={active} disabled={disabled} mobile={mobile}>{index}</StyledProgressIcon>
);

ProgressIcon.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  mobile: PropTypes.bool,
  index: PropTypes.number,
};

ProgressIcon.defaultProps = {
  disabled: false,
  active: false,
  mobile: false,
  index: 1,
};

export default ProgressIcon;
