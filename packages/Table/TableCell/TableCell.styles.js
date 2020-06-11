import styled from 'styled-components';

const StyledTableCell = styled.div`
  display: table-cell;
  text-align: ${({ align }) => align};
  vertical-align: ${({ valign }) => valign};
  padding: ${({ padding, theme }) => {
    if (padding === 'checkbox' || padding === 'medium') {
      return theme.spacing['8'];
    }
    if (padding === 'small') {
      return theme.spacing['4'];
    }
    return 'none';
  }};
`;

export default StyledTableCell;
