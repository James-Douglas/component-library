import styled from 'styled-components';

const StyledOverline = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.placeholderText};
`;

export default StyledOverline;
