import styled, { css } from 'styled-components';

export const StyledHiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: ${({ theme }) => theme.spacing.px};
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: ${({ theme }) => theme.spacing.px};
`;

export const StyledWrap = styled.div`
  ${({ disabled, theme, variant }) => {
    if (variant === 'boxed') {
      if (!disabled) {
        return css`
        border: 1px solid ${theme.colors.grey100};
        padding: ${theme.spacing[8]} ${theme.spacing[0]} ${theme.spacing[12]} ${theme.spacing[16]};
        box-shadow: ${theme.checkbox.boxedShadow};
        :hover {
          background: ${theme.colors.primary50};
          border: ${theme.checkbox.borderHover};
          cursor: pointer;
        }
        :active, :focus {
          border: ${theme.checkbox.borderHover};
        }
        :hover ${StyledCheckbox}, :active ${StyledCheckbox}, :focus ${StyledCheckbox} {
          border: ${theme.checkbox.borderHover};
        }
        margin-bottom: ${theme.spacing[12]};
      `;
      }
      return css`
        cursor: not-allowed;
        padding: ${theme.spacing[8]} ${theme.spacing[0]} ${theme.spacing[12]} ${theme.spacing[16]};
        background: ${theme.checkbox.backgroundDisabled};
        border: 1px solid ${theme.colors.grey100};
        color: ${theme.checkbox.colorDisabled};
        opacity:${theme.checkbox.disabledOpacity};
        margin-bottom: ${theme.spacing[12]};
      `;
    }
    return css`  
    display: flex;
    margin-bottom: ${theme.spacing[12]};
    min-width: 3rem;
    `;
  }}
  ${({ isFocused, theme, variant }) => (isFocused && variant === 'boxed') && css`
  border: ${theme.checkbox.borderHover};
  `}
`;

export const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.checkbox.border};
  ${({ theme, checked, isAutofill }) => {
    if (isAutofill) {
      return css`
        background: ${theme.checkbox.prefilled};
        border: ${theme.checkbox.prefilledBorder};
      `;
    } if (checked) {
      return css`
        background: ${theme.checkbox.backgroundChecked};
      `;
    }
    return css`
      background: ${theme.checkbox.background};
    `;
  }}

  color: ${({ theme, isAutofill }) => (isAutofill ? theme.checkbox.iconPrefilled : theme.checkbox.color)};
  min-width: ${({ theme }) => theme.checkbox.size};
  height: ${({ theme }) => theme.checkbox.size};
  pointer-events: none;
  border-radius: ${({ theme }) => theme.checkbox.borderRadius};
  padding: ${({ theme }) => theme.spacing.px};

  ${StyledHiddenInput}:focus + label & {
    box-shadow: ${({ theme }) => theme.checkbox.shadow};
  }

  ${({ invertColour, theme }) => invertColour && css`
    background: ${theme.checkbox.background};
    color: ${theme.checkbox.backgroundChecked};
  `}

  ${({ disabled, theme }) => disabled && css`
    pointer-events: none;
    background: ${theme.checkbox.backgroundDisabled};
    border: ${theme.borders.disabled};
    color: ${theme.checkbox.colorDisabled};
    opacity:${theme.checkbox.disabledOpacity};
  `}
  ${({ disabled, theme, variant }) => disabled && variant === 'boxed' && css`
    border: 1px solid ${theme.colors.grey500};
  `}
  ${({ theme, invalid }) => invalid && css`
    border: ${theme.checkbox.invalid};
    :hover {
      border: ${theme.borders.invalid};
    }
  `}
`;

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing[4]};

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `};
  :hover ${StyledCheckbox} {
    border: ${({ theme, disabled }) => (disabled ? null : theme.checkbox.borderHover)};
  }
  :active ${StyledCheckbox} {
   border: ${({ theme, disabled }) => (disabled ? null : theme.checkbox.borderHover)};
  }
`;

export const StyledContent = styled.div`
  margin: ${({ theme }) => theme.checkbox.contentMargin};
  pointer-events: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.spacing[24]};
`;

export const StyledImg = styled.img`
  min-width: ${({ theme }) => theme.spacing[24]};
  height: ${({ theme }) => theme.spacing[24]};
  margin-left: ${({ theme }) => theme.spacing[8]};
`;
