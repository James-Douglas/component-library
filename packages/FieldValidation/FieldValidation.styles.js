import styled from 'styled-components';

export const StyledFieldValidation = styled.div`
  display: table;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex['30']};
  margin-top: ${({ theme }) => theme.spacing['8']};
`;

export const StyledIconWrap = styled.div`
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

export const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.error500};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
`;
