import styled, { css } from 'styled-components';

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

export default StyledProgressIcon;
