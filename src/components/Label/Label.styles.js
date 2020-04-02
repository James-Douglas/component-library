import styled from 'styled-components';

export const StyledLabelContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.label.color};
  width: 100%;
`;
