import styled from 'styled-components';

const StyledBackground = styled.div`
  padding: 5em;
  height: 100vh;
  width: 100%;
  background: ${(props) => (props.color === 'grey' ? '#F3F3F3' : '#FFFFFF')};
`;

export default StyledBackground;
