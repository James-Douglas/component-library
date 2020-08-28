import styled from 'styled-components';

export const StyledButtonLabel = styled.label`
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: block;
  position: relative;
  transition: all 200ms ease-out;
  &:hover {
    color: ${({ theme }) => theme.toggle.base.labelColorHover};
  }
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
  &:hover {
    box-shadow: none;
  }
`;
