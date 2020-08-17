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
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  min-width: 3rem;
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
  align-items: center;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing[4]};

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `};
  :hover ${StyledCheckbox}{
    border: ${({ theme, disabled }) => (disabled ? null : theme.checkbox.borderHover)};
  }
  :active ${StyledCheckbox}{
    border: ${({ theme, disabled }) => (disabled ? null : theme.checkbox.active)};
  }
`;

export const StyledContent = styled.div`
  margin: ${({ theme }) => theme.checkbox.contentMargin};
  pointer-events: none;
  font-size: ${({ theme }) => theme.fontSize.base};
`;
