import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  width: 100%;
  background: ${(props) => props.bg};
`;

export default StyledContainer;
