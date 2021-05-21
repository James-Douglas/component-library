/* eslint-disable react/jsx-props-no-spreading,react/display-name,react/prop-types */
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import MaskedInput from 'react-text-mask';
import { StyledLabel } from '@comparethemarketau/manor-label';

const labelAnimation = (props) => keyframes`
  0% {
    visibility: hidden;
    top: 12px;
  }
  100% {
    top: ${props.breakpoint === 'lg' ? '7px' : '5px'};
    visibility: visible;
  }
`;

const pseudoBorder = ({ theme }) => css`
  content: "";
  width: 1px;
  height: 0%;
  background: ${theme.input.expressive};
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.1s all ease-in;
`;

export const StyledWrapper = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  ${({ removeGutters }) => !removeGutters && css`
    margin-bottom: ${({ theme, inFieldLabel }) => (inFieldLabel ? theme.spacing[48] : theme.spacing[20])};
  `}
  ${({ inputValue, inFieldLabel, breakpoint }) => (inputValue && inFieldLabel) && css`
    ${StyledLabel} {
      animation : ${labelAnimation(breakpoint)} 0.2s 1 ease-in-out;
      animation-fill-mode: forwards;
    }
  `}
`;

export const StyledClearIcon = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ theme }) => theme.spacing[44]};
  height: ${({ theme }) => theme.spacing[44]};
  ${({ theme, breakpoint, expressive }) => (breakpoint === 'lg' && expressive) && css`
    height: ${theme.spacing[56]};
  `};
  transition: ${({ theme }) => theme.transition.default};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ theme, isAutofill }) => (isAutofill ? theme.input.clearButton.colorAutofill : theme.input.clearButton.color)};
  :hover {
    color: ${({ theme }) => theme.input.clearButton.hoverColor};
  }
`;

export const StyledAffix = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.grey600};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, expressive, breakpoint }) => (breakpoint !== 'xs' && css`
    min-width: ${expressive ? theme.spacing[16] : theme.spacing[48]};
  `)};
  padding: ${({ theme, breakpoint }) => `${theme.spacing[8]} ${breakpoint === 'xs' ? theme.spacing[8] : theme.spacing[12]}`};
  padding: ${({ theme, breakpoint, affixType }) => affixType === 'prefix' && css`${theme.spacing[8]} ${theme.spacing[0]} ${theme.spacing[8]} ${breakpoint === 'xs' ? theme.spacing[8] : theme.spacing[12]}}`};
  height: ${({ theme }) => theme.input.height};
  ${({ theme, breakpoint, expressive }) => ((breakpoint === 'lg' && expressive)) && css`
    height: ${theme.spacing[56]};
  `}
  ${({ prefixBlock, isAutofill, theme }) => prefixBlock && !isAutofill && css`
    background: ${theme.colors.grey100};
  `}
  ${({ theme, expressive, affixType }) => expressive && css`
    color: ${affixType === 'suffix' ? `${theme.colors.primary500}` : `${theme.colors.grey600}`};
  `}
`;

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInputWrap = styled.div`
  display: flex;
  min-width: 20%;
  background: ${({ theme }) => theme.input.background};
  transition: border 0.1s ease-in-out;
  border: ${({ theme }) => theme.borders.transparent};
  ${({ expressive }) => (!expressive) && css`
    :hover {
      border: ${({ theme, disabled, disableFocusStyles }) => ((disabled || disableFocusStyles) ? '' : theme.borders.hover)};
    }
  `}
  [disabled] {
    background: ${({ theme, expressive }) => (expressive ? theme.input.expressiveDisabled : theme.input.background)};
  }
  ${({ theme, expressive, bordered }) => !expressive && css`
    border: ${bordered ? theme.borders.component : theme.borders.transparent};
  `}
  ${({ theme, expressive, disabled }) => expressive && css`
    border-bottom: ${disabled ? theme.borders.disabled : theme.borders.expressive};
    &:hover {
      border-bottom: ${disabled ? theme.borders.disabled : theme.borders.hover};
    }
    &:before {
      ${pseudoBorder};
    }
    &:hover:before {
      ${({ inputValue }) => (!disabled && !inputValue) && css`
        height: 100%;
      `}
    }
  `}
  ${({
    theme, isAutofill, disabled, expressive,
  }) => (isAutofill && !disabled && !expressive) && css`
    border: ${theme.borders.prefill};
  `}
  ${({ disabled }) => (disabled) && css`
    opacity: 0.5;
  `}
  ${({
    theme,
    isFocusActive,
    expressive,
    bordered,
  }) => (isFocusActive && !expressive) && css`
    border: ${bordered ? theme.borders.active : theme.borders.transparent};
  `}
  ${({ theme, invalid, expressive }) => (invalid && !expressive) && css`
    border: ${theme.borders.invalid};
    :hover {
      border: ${theme.borders.invalid};
    }
  `}
  ${({ theme, isFocusActive, expressive }) => (isFocusActive && expressive) && css`
    border-bottom: ${theme.borders.active};
    transition: 0.1s border ease-in;
  `}
  ${({ theme, invalid, expressive }) => (invalid && expressive) && css`
    border-bottom: ${theme.borders.invalid};
    transition: 0.1s border ease-in;
    :hover {
      border-bottom: ${theme.borders.invalid};
    }
    &:before {
      ${pseudoBorder};
      height: 100%;
      background: ${theme.colors.error500};
    }
  `}
  ${({ theme, isAutofill, expressive }) => (isAutofill && expressive) && css`
    border-bottom: ${theme.borders.prefill};
    transition: 0.1s border ease-in;
    :hover {
      border-bottom: ${theme.borders.prefill};
    }
    &:before {
      content: "";
      width: 1px;
      height: 100%;
      background: ${theme.colors.inputPrefilledBorder};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `}
`;

export const StyledInputClearWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${({ theme }) => `calc(${theme.input.height} + 0.1rem)`};
  ${({ theme, breakpoint, expressive }) => ((breakpoint === 'lg' && expressive)) && css`
    height: calc(${theme.spacing[56]} + 0.1rem)};
  `}
  margin-right: 0.1rem;
  ${({ theme, expressive }) => expressive && css`
    & input {
      border: none;
      padding-left: ${theme.spacing[8]};
    }
  `}
  ${({ theme, expressive, inputValue }) => (expressive && inputValue) && css`
    & input {
      transition: ${theme.transition.default};
      padding-top: 16px;
    }
  `}
`;

export const StyledMaskInput = styled(React.forwardRef(({
  isAutofill, expressive, disableClearIcon, trackingLabel, ...props
}, ref) => <MaskedInput {...props} ref={ref} />))`
  font-family: ${({ theme }) => theme.fontFamily};
  padding-left: ${({ theme }) => theme.spacing[12]};
  padding-right: ${({
    theme, disableClearIcon,
  }) => (disableClearIcon ? theme.spacing[12] : theme.spacing[36])};
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: ${({ theme }) => theme.borders.transparent};
  height: ${({ theme }) => theme.input.height};
  ${({ theme, breakpoint, expressive }) => ((breakpoint === 'lg' && expressive)) && css`
    height: ${theme.spacing[56]};
    font-size: ${theme.fontSize.xl};
    ::placeholder {
      font-size: ${theme.fontSize.xl};
    }
  `}
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
`;

export const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fontFamily};
  padding-left: ${({ theme }) => theme.spacing[12]};
  padding-right: ${({
    theme, disableClearIcon,
  }) => (disableClearIcon ? theme.spacing[12] : theme.spacing[36])};
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: ${({ theme }) => theme.borders.transparent};
  height: ${({ theme }) => theme.input.height};
  ${({ theme, breakpoint, expressive }) => ((breakpoint === 'lg' && expressive)) && css`
    height: ${theme.spacing[56]};
    font-size: ${theme.fontSize.xl};
    ::placeholder {
      font-size: ${theme.fontSize.xl};
    }
  `}
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
`;
