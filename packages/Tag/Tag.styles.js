import styled from 'styled-components';

export const StyledTag = styled.div`
  background: ${({ theme, alert }) => (alert ? theme.tag.alert : theme.tag.background)};
  margin-left: ${({ theme }) => (theme.spacing[4])};
  padding-left: ${({ theme }) => (theme.spacing[4])};
  height: ${({ theme }) => (theme.spacing[36])};
  border-radius: ${({ theme }) => (theme.borderRadius.default)};
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: auto;
  p {
    font-family: ${({ theme }) => (theme.fontFamily)};
    font-size: ${({ theme }) => (theme.fontSize.sm)};
    ::selection {
      color: none;
      background: none;
    }
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  border: 1px solid transparent;
  &:hover {
    border: ${({ theme, alert }) => (alert ? theme.tag.alertHover : theme.tag.regHover)};
    transition: ${({ theme }) => theme.transition.default};
  }
`;

export const StyledTagP = styled.p`
  color: ${({ theme, alert }) => (alert ? theme.tag.alertTextColor : theme.colors.primary500)};
`;

export const StyledTagButton = styled.button`
  color: ${({ theme, alert }) => (alert ? theme.tag.alertTextColor : theme.colors.primary500)};
  margin-top: 2px;
`;
