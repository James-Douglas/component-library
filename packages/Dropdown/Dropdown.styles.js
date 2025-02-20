import styled, { css } from 'styled-components';

export const StyledDropdownMainWrap = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  position: relative;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  ${({ variant }) => (variant === 'text' || variant === 'text-fixed-chevron') && css`
    & div:first-of-type {
      margin-bottom: ${({ theme }) => theme.spacing[0]};
    }
  `}
`;

export const StyledSvgArrow = styled.span`
  position: ${({ variant }) => (variant === 'text' ? 'static' : 'absolute')};
  right: ${({ theme }) => theme.spacing[16]};
  top: ${({ theme }) => theme.spacing[12]};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.inputDisabledTextOnGray : theme.dropdown.caretFill)};
  ${({ variant }) => variant === 'text' && css`
    margin-left: ${({ theme }) => theme.spacing[8]};
  `}
`;

export const StyledDropdownContent = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey900};
  width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  height: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? theme.spacing[40] : theme.dropdown.height)};
  padding: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? '0' : `${theme.spacing['8']} ${theme.spacing['12']}`)};
  color: ${({ theme }) => theme.dropdown.color};
`;

export const StyledDropdownButton = styled.div`
  background: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? 'transparent' : theme.dropdown.background)};
  border: ${({ theme }) => theme.borders.component};
  &:hover {
    border: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? 'none' : theme.combo.list.item.borderFocus)};
    background-color: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? theme.colors.primary50 : theme.dropdown.background)};
  }
  &:focus {
    border: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? 'none' : theme.combo.list.item.borderFocus)};
    outline: ${({ theme, variant }) => (variant === 'text' || variant === 'text-fixed-chevron' ? theme.combo.list.item.borderFocus : 'none')};
  }
  &:hover {
    cursor: pointer;
  }
  ${({ invalid }) => invalid && css`
    border: ${({ theme }) => theme.borders.invalid};
    &:hover,
    &:focus {
       border: ${({ theme }) => theme.borders.invalid};
       cursor: default;
    }
  `}
  ${({ disabled }) => disabled && css`
    background: ${({ theme }) => theme.dropdown.backgroundDisabled};
    border: ${({ theme }) => theme.borders.disabled};
    &:hover,
    &:focus {
       border: ${({ theme }) => theme.borders.disabled};
       cursor: default;
    }
  `}
  ${({ variant }) => (variant === 'text' || variant === 'text-fixed-chevron') && css`
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    transition: ${({ theme }) => theme.transition.default};
    & div {
      padding-left: ${({ theme }) => theme.spacing['8']};
      padding-right: ${({ theme }) => theme.spacing['8']};
      color: ${({ theme }) => theme.colors.primary500};
    }
  `}
`;

export const StyledListul = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: ${({ theme }) => (theme.spacing[252])};
  overflow: auto;
  li {
    list-style-type: none;
    position: relative;
    border: ${({ theme }) => theme.borders.transparent};
    font-size: ${({ theme }) => theme.fontSize.base};
    padding: ${({ theme }) => `${theme.spacing['8']} ${theme.spacing['36']}`};
    ${({ screenTouch }) => !screenTouch && css`
      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.dropdown.list.hoverBackground};
      }
    `}
    &:focus {
      outline: none;
      border: ${({ theme }) => theme.dropdown.list.item.borderFocus};
    }
  }
`;

export const StyledList = styled.div`
  position: absolute;
  display: inline-flex;
  width: 100%;
  box-shadow: ${({ theme }) => theme.dropdown.shadow};
  z-index: ${({ theme }) => theme.zIndex[40]};
  background: ${({ theme }) => theme.colors.white};
  ${({ variant }) => (variant === 'text' || variant === 'text-fixed-chevron') && css`
    top: ${({ theme }) => `calc(100% + ${theme.spacing[4]})`};
  `}
`;

export const StyledAffix = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: ${({ theme }) => `0 ${theme.spacing[8]} 0 0`};
  padding-right: ${({ affixType }) => (affixType === 'prefix' ? '2rem' : '')};
  padding-left: ${({ affixType }) => (affixType === 'suffix' ? '2rem' : '')};
  background: ${({ theme }) => theme.input.background};
  color: ${({ theme }) => theme.dropdown.prefixColor};
`;

export const StyledDropdownContainer = styled.div`
  position: relative;
  width: 100%;
  ${({ variant }) => (variant === 'text' || variant === 'text-fixed-chevron') && css`
    margin-left: -${({ theme }) => theme.spacing[8]};
    margin-right: -${({ theme }) => theme.spacing[8]};
    width: auto;
  `}
`;

export const StyledPlaceholder = styled.span`
  ${({ theme }) => ({ ...theme.placeholder })};
`;
