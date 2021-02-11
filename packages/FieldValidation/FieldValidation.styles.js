import styled from 'styled-components';

export const StyledFieldValidation = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  display: table;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex['20']};
  margin-top: ${({ theme }) => theme.spacing['8']};
`;

export const StyledIconWrap = styled.div`
  margin-right: ${({ theme }) => theme.spacing[4]};
  margin-top: -0.2rem;
`;

export const StyledMessage = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.error500};
  font-size: ${({ theme }) => theme.fontSize.sm};
  p {
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeight.tight};
  }
`;
