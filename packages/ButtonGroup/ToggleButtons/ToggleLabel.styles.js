import styled, { css } from 'styled-components';

const buttonOverrides = css`
  &:hover {
    box-shadow: none;
  }
`;

export const StyledToggleLabel = styled.label`
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: block;
  position: relative;
  transition : all 200ms ease-out;
  &:hover {
    color: ${({ theme }) => theme.toggle.base.labelColorHover};
  }

  ${({ greyed }) => greyed && css`
    background: ${({ theme }) => theme.toggle.greyed.background};
  `};
`;

export const StyledContent = styled.div`
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  &:hover {
    box-shadow: ${({ theme }) => theme.toggle.base.shadowHover};
  }
  ${({ button }) => button && buttonOverrides}
`;
