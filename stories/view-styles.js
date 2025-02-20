import styled, { css } from 'styled-components';

const StyledBackground = styled.div`
  ${(props) => (!props.disablePadding && css`padding: 5em;`)}
  min-height: 100vh;
  //width: 100%;
  background: ${(props) => (props.color === 'grey' ? '#F3F3F3' : '#FFFFFF')};
`;

export default StyledBackground;
