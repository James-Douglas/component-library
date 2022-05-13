import styled from 'styled-components';

export const StyledContainer = styled.div`
  font-size: ${({ theme }) => theme.loading.fontSize};
  background-color: ${({ theme }) => theme.loading.containerBackground};
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledInnerContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme, type }) => type === 'spinner' && theme.spacing[32]}
`;

export const StyledLoadingText = styled.span`
  p {
    margin: 0;
  }
`;
