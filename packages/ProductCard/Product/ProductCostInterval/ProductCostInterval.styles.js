import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
`;

const Filter = styled.select`
  color: ${({ theme }) => theme.colors.primary500};
  border: none;
  background: none;
  text-align-last: right;
  font-size: inherit;
`;

const Option = styled.option`
  text-transform: capitalize;
`;

export { Wrapper, Filter, Option };
