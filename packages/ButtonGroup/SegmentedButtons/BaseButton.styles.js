import styled, { css } from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  flex: auto;
  position: relative;
  cursor: pointer;
  border: ${({ theme, invalid }) => (invalid ? theme.borders.invalid : theme.borders.component)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: ${({ theme }) => theme.toggle.base.background};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  &:not(:first-child) {
    border-left: ${({ theme }) => theme.borders.component};
  }
  &:hover {
    border: ${({ theme }) => theme.borders.hover};
    z-index: 1;
  }
`;

export const StyledToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  + label {
    color: ${({ theme }) => theme.toggle.base.color};
  }

  &:checked + label svg {
    color: ${({ theme }) => theme.toggle.base.colorChecked};
    fill: currentColor;
    box-shadow: none;
  }

  &:checked + label div {
    background: ${({ theme }) => theme.toggle.base.backgroundChecked};
    color: ${({ checkedFontColor, theme }) => checkedFontColor || theme.toggle.base.colorChecked};
    box-shadow: none;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  &:disabled + label:hover {
    cursor: not-allowed;
  }

  &:disabled + label div p {
    color: ${({ theme }) => theme.toggle.base.colorDisabled};
    border: ${({ theme }) => theme.borders.transparent};
    fill: currentColor;
  }

  &:focus + label {
    box-shadow: 0px 2px 4px rgba(208, 206, 206, 0.5);
  }

  ${({ invalid, theme }) => invalid
    && css`
      & + label {
        color: ${theme.colors.error300};
        fill: currentColor;
      }
      &:checked + label {
        color: ${theme.colors.error300};
        fill: currentColor;
      }
    `}
`;
