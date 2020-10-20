import styled, { css } from 'styled-components';

const WrapperNotXS = css`
  margin-right: ${({ theme }) => theme.spacing[10]};
`;

const WrapperDesktop = css`
  flex: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  ${({ isDesktop }) => isDesktop && WrapperDesktop}
  ${({ notXS }) => notXS && WrapperNotXS}
`;

export default Wrapper;
