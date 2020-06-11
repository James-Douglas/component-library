import styled from 'styled-components';

export const StyledCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: ${({ theme }) => `0 -${theme.spacing['4']}`};
`;

export const StyledCardGroupChildren = styled.div`
  display: flex;
  width: ${({ cols }) => (cols === 1 ? '100%' : `${100 / cols}%`)};
  padding-right: ${({ theme }) => theme.spacing['8']};
  padding-left: ${({ theme }) => theme.spacing['8']};
`;
