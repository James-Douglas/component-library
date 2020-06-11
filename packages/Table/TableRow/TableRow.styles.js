import styled from 'styled-components';

const StyledTableRow = styled.div`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  &:hover {
    background: ${({ hover, theme }) => (hover ? theme.table.rowHoverBackground : 'none')};
  }
`;

export default StyledTableRow;
