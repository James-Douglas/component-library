import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing['36']};
`;

export const StyledTextToggleContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  min-height: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  
  ${({ contentWidth }) => contentWidth && css`
    width: ${contentWidth};
  `};
  
  ${({ contentHeight }) => contentHeight && css`
    height: ${contentHeight};
  `};
`;

export const StyledContent = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
