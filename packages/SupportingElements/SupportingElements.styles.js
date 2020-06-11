import styled from 'styled-components';

const StyledOptionalText = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding-top: ${({ theme }) => theme.spacing[8]};
`;

export default StyledOptionalText;
