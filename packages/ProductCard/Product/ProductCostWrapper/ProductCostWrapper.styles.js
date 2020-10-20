import styled, { css } from 'styled-components';

const WrapperNotDesktop = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 7.8rem;
  justify-content: space-around;
`;

const WrapperMD = css`
  flex: 1;
`;

const WrapperLG = css`
  text-align: center;
`;

const Wrapper = styled.div`
  ${({ isDesktop }) => !isDesktop && WrapperNotDesktop}
  ${({ isLGPlus }) => isLGPlus && WrapperLG}
  ${({ isMD }) => isMD && WrapperMD}
`;

export default Wrapper;
