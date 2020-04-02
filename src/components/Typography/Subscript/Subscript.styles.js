import styled from 'styled-components';

const StyledSubscript = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey600};
`;

export default StyledSubscript;
