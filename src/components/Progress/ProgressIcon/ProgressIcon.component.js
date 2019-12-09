import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledProgressIcon = styled.span`
  border: ${(props) => `2px solid ${props.theme.colors.black}`}; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spacing['16']};
  border-radius:  ${(props) => props.theme.borderRadius.full};  
  height: 3rem;
  width: 3rem;
  ${(props) => !props.mobile && css`
    border: none; 
  `}
  ${(props) => props.disabled && css`
    border: 2px solid ${props.theme.colors.greyDark}
    color: ${props.theme.colors.greyDark}
    cursor: default;
  `}
  ${(props) => props.active && css`
    color: ${props.theme.colors.white}
    background: ${props.theme.colors.black};
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
