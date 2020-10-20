import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${({ theme, isMDPlus }) => theme.spacing[!isMDPlus ? 28 : 60]};
  flex: 0 0 ${({ theme }) => theme.spacing[60]};
  margin-right: ${({ theme }) => theme.spacing[16]};
`;

export default Wrapper;
