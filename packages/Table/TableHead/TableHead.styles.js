import styled from 'styled-components';

const StyledTableHead = styled.div`
  display: table-row-group;
  & p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export default StyledTableHead;
