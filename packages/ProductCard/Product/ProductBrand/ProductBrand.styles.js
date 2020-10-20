import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${({ isLGPlus, stacked }) => (isLGPlus && !stacked ? 'flex' : 'block')};
`;

export default Wrapper;
