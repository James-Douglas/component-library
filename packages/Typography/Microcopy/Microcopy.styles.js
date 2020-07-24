import styled from 'styled-components';

const StyledMicrocopy = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  a {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.lineHeight.snug};
  }
`;

export default StyledMicrocopy;
