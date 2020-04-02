import styled from 'styled-components';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledInnerRow = styled(Row)`
  margin: 0;
`;

export const StyledColumn = styled(Column)`
  padding-left: 0;
  padding-right: 0;
`;
