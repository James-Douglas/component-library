import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: ${({ theme, isLGPlus }) => !isLGPlus && theme.spacing[16]};
`;

export default Wrapper;
