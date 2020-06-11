import styled from 'styled-components';

const StyledHR = styled.hr`
  border: none;
  margin: 0;
  padding: 0;
  height: ${({ type }) => (type === 'horizontal' ? 0 : '100%')};
  width: ${({ type }) => (type === 'horizontal' ? '100%' : 0)};
  margin: ${({ type, theme }) => (type === 'horizontal'
    ? `${theme.spacing['32']} 0`
    : `0 ${theme.spacing['32']}`)};
  border-bottom: ${({ type, theme }) => (type === 'horizontal' ? theme.separator.border : 'auto')};
  border-right: ${({ type, theme }) => (type === 'vertical' ? theme.separator.border : 'auto')};
`;

export default StyledHR;
