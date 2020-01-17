import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledProgressIcon = styled.span`
  border: ${({ theme }) => theme.progress.icon.border}; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing['16']};
  border-radius:  ${({ theme }) => theme.borderRadius.full};  
  height: 3rem; 
  width: 3rem; 
  ${({ mobile }) => !mobile && css`
    border: none; 
  `}
  ${({ theme, disabled }) => disabled && css`
    border: ${theme.progress.icon.borderDisabled};
    color: ${theme.progress.icon.colorDisabled};
    cursor: default;
  `}
  ${({ theme, active }) => active && css`
    color: ${theme.progress.icon.activeColor};
    background: ${theme.progress.icon.activeBackground};
  `}
`;

const ProgressIcon = ({
  disabled,
  active,
  mobile,
  index,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledProgressIcon active={active} disabled={disabled} mobile={mobile}>{index}</StyledProgressIcon>
  </ThemeProvider>
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
