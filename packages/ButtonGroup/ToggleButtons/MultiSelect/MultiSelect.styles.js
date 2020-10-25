import styled from 'styled-components';
import BaseToggle from '../BaseToggle';

export const StyledIconToggleContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${({ theme }) => theme.toggle.multiSelect.width};
  height: ${({ theme }) => theme.spacing['180']};
  padding: ${({ theme }) => theme.spacing['16']};
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  height: ${({ theme }) => theme.spacing['80']};
  width: ${({ theme }) => theme.spacing['80']};
`;

export const StyledIconContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing['8']};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`;

export const StyledTitle = styled.div`
  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0;
  }
`;

export const StyledDescription = styled.div`
  p {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.grey300 : theme.colors.grey800)};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeight.tighter};
  }
`;

export const StyledBaseToggle = styled(BaseToggle)`
  input {
    label {
      position: relative;
    }
    & + label:after {
      transition : ${({ theme }) => theme.transition.default};
      content: '';
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0 62px 62px 0;
      border-color: transparent;
      right: 0;
      top: 0;
      position: absolute;
    }
    &:checked + label:after {
      border-color: ${({ theme }) => `transparent ${theme.colors.primary500} transparent transparent`};
    }
    &:checked + label {
      border: none;
      outline: ${({ theme }) => theme.toggle.multiSelect.borderChecked};
    }
    &:checked + label div {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.toggle.base.color};
    }
    &:checked + label svg {
      color: ${({ theme }) => theme.colors.primary500};
      fill: currentColor;
    }
  }
`;

export const StyledCheck = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: .7rem;
  right: .7rem;
  background: white;
  border-radius: 1rem;
  height: ${({ theme }) => theme.spacing[20]};
  width: ${({ theme }) => theme.spacing[20]};
  z-index: 2;
  font-size: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.grey300};
  & svg {
    transition : ${({ theme }) => theme.transition.default};
  }
`;

export const StyledPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  height: ${({ theme }) => theme.spacing['80']};
  width: ${({ theme }) => theme.spacing['80']};
`;
