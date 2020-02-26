import styled from 'styled-components';
import Row from '../../components/Grid/Row/Row.component';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  width: 100%;
  background: ${(props) => props.bg};
`;

const StyledRow = styled(Row)`
  background: ${(props) => props.bg};
  padding-top: 1.5rem;
`;

export { StyledRow };
export default StyledContainer;
