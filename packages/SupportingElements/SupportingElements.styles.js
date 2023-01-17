import styled from 'styled-components';

const StyledOptionalText = styled.div`
  display: flex;
  justify-content: ${({ alignRight }) => (alignRight ? 'end' : 'start')};
  padding-top: ${({ bottom, theme }) => (bottom ? theme.spacing[8] : 0)};
`;

export default StyledOptionalText;
