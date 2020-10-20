import styled, { css } from 'styled-components';

const WrapperNotDesktop = css`
  justify-content: flex-end;
`;

const WrapperMD = css`
  justify-content: space-between;
`;

const WrapperLG = css`
  align-items: center;
  flex: 2;
  justify-content: space-around;
  margin-top: -${({ theme }) => theme.spacing[16]};
  margin-left: 0;
  padding-left: 0;
  padding-right: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary50};
  padding: ${({ theme }) => theme.spacing[16]};
  margin-top: ${({ theme }) => theme.spacing[16]};
  margin-left: -${({ theme }) => theme.spacing[16]};
  margin-right: -${({ theme }) => theme.spacing[16]};
  margin-bottom: -${({ theme }) => theme.spacing[16]};
  ${({ isLGPlus }) => isLGPlus && WrapperLG};
  ${({ isMD }) => isMD && WrapperMD};
  ${({ isDesktop }) => !isDesktop && WrapperNotDesktop};
`;

export default Wrapper;
