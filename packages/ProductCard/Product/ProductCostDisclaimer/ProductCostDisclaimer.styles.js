import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: 0.8em;
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'auto')};
`;

const Sup = styled.sup`
  text-align: right;
`;

export { Wrapper, Sup };
