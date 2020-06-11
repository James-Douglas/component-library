import styled from 'styled-components';

const StyledTable = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

export default StyledTable;
