import styled from 'styled-components';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';

export const StyledGrid = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
`;

export const StyledRow = styled(Row)`
  margin-bottom: 2rem;
  border: 1px dashed ${(props) => props.theme.colors.blueLighter};
  justify-content: ${(props) => props.justify}
`;

export const StyledCol = styled(Column)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: rgba(28, 62, 148, 0.2);
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const StyledIcon = styled.div`
  margin-left: 3.2rem;
  margin-top: 3.2rem;
`;
