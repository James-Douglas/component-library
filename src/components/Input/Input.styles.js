import React from 'react';
import styled, { css } from 'styled-components';
import MaskedInput from 'react-text-mask';

export const StyledWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const StyledClearIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ theme }) => theme.spacing[44]};
  height: ${({ theme }) => theme.spacing[44]};
  transition: .2s ease-in-out all;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ theme, isAutofill }) => (isAutofill ? theme.input.clearButton.colorAutofill : theme.input.clearButton.color)};
  :hover {
    color: ${({ theme }) => theme.input.clearButton.hoverColor};
  }
`;

export const StyledAffix = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width:  ${({ theme }) => theme.spacing[48]};
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[12]}`};
  height: ${({ theme }) => theme.input.height};
  ${({ prefixBlock, isAutofill, theme }) => prefixBlock && !isAutofill && css`
    background: ${theme.colors.grey100};
  `}
`;

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInputWrap = styled.div`
  display: flex;
  background: ${({ theme }) => theme.input.background};
  ${({ theme, isAutofill, disabled }) => (isAutofill && !disabled) && css`
    background: ${theme.colors.inputPrefilled};
  `}
  border: ${({ theme }) => theme.borders.transparent};
  :hover {
    border: ${({ theme, disabled }) => (disabled ? '' : theme.borders.hover)};
  }
  ::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })};
  }
  [disabled] {
    background: ${({ theme }) => theme.input.background};
  }
  ${({ theme, bordered }) => bordered && css`
    border: ${theme.borders.component};
  `}
  ${({
    theme, bordered, isAutofill, disabled,
  }) => (bordered && isAutofill && !disabled) && css`
    border: ${theme.borders.prefill};
  `}
 
  ${({ disabled }) => (disabled) && css`
    opacity: 0.5;
  `}
  ${({ theme, isFocusActive }) => isFocusActive && css`
    border: ${theme.borders.hover};
  `}
   ${({ theme, invalid }) => invalid && css`
    border: ${theme.borders.invalid};
    :hover {
      border: ${theme.borders.invalid};
    }
  `}
`;

export const StyledInputClearWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${({ theme }) => `calc(${theme.input.height} + 0.1rem)`};
  margin-right: 0.1rem;
`;

// eslint-disable-next-line react/jsx-props-no-spreading,react/display-name,react/prop-types
export const StyledInput = styled(React.forwardRef(({ isAutofill, ...props }, ref) => <MaskedInput {...props} ref={ref} />))`
  padding-left: ${({ theme }) => theme.spacing[12]};
  padding-right: ${({ theme }) => theme.spacing[36]};
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: ${({ theme }) => theme.borders.transparent};
  height: ${({ theme }) => theme.input.height};
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-ms-clear {
    display: none;
  }
  :focus,
  :active,
  :hover {
    outline: 0;
  }
  ${({ theme, isAutofill, disabled }) => isAutofill && !disabled && css`
    background: ${theme.colors.inputPrefilled};
  `}
`;
