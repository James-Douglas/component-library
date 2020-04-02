import styled, { css } from 'styled-components';

export const StyledToggle = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  border: ${({ theme, invalid }) => (invalid ? theme.borders.invalid : theme.borders.component)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: ${({ theme }) => `0 ${theme.spacing['16']} ${theme.spacing['16']} 0`};
  background: ${({ theme }) => theme.toggle.base.background};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  line-height: ${({ theme }) => theme.lineHeight.normal};
`;

export const StyledToggleInput = styled.input`
  opacity: 0;
  width:0;
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
  }

  &:disabled + label:hover {
    cursor: not-allowed;
  }

  &:disabled + label {
    color: ${({ theme }) => theme.toggle.base.colorDisabled};
    border: ${({ theme }) => theme.borders.transparent};
    fill: currentColor;
  }

  &:focus + label {
    box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }

  ${({ invalid, theme }) => invalid && css`
     & + label {
      color: ${theme.colors.error300};
      fill: currentColor;
     }
     &:checked + label {
      color:  ${theme.colors.error300};
      fill: currentColor;
    }
  `}
`;
