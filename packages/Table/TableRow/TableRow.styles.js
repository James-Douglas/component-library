import styled, { css } from 'styled-components';

const StyledTableRow = styled.div`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  ${({ theme, hover }) => hover && css`
    background: ${theme.table.rowHoverBackground};
  `}
`;
export default StyledTableRow;
