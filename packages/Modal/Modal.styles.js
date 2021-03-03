import styled, { keyframes, css } from 'styled-components';

// These are not ideal, but they are reused calcs for the modal setup.
// It mainly covers default behaviour and also accommodates padding in height calcs.
const defaultModalHeaderHeight = 68;
const supplementaryHeaderPadding = 20;

export const StyledAlignment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: ${({ zIndex }) => zIndex};
`;

const animateIn = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModal = styled.div`
  background: ${({ theme }) => theme.colors.grey100};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  z-index: inherit;
  max-width: 76.8rem;
  min-width: 35rem;
  width: ${({ desktop }) => (desktop ? '76.8rem' : '100%')};
  ${({ dynamicHeight }) => !dynamicHeight
    && css`
      height: ${({ desktop }) => (desktop ? '80%' : '100%')};
    `}
  pointer-events: auto;
  position: relative;
  animation-name: ${animateIn};
  animation-duration: 0.3s;
`;

export const StyledModalHeader = styled.div`
  background: ${({ theme, desktop }) => (desktop ? theme.colors.white : theme.colors.grey100)};
  padding: 1.9rem ${({ theme }) => theme.spacing[24]};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  h3 {
    margin: 0;
  }
`;

export const StyledTitle = styled.div`
  background: ${({ theme, desktop }) => (desktop ? theme.colors.white : theme.colors.grey100)};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`;

export const StyledTitleIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary500};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  margin-right: ${({ theme }) => theme.spacing[16]};
`;

export const StyledCloseIcon = styled.div`
  cursor: pointer;
  z-index: inherit;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`;

export const StyledContent = styled.div`
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[24]} 0`};
  height: ${({
    showSupplementaryBar, desktop, modalHeaderBarHeight,
  }) => `calc(100% - ${desktop && showSupplementaryBar ? ((modalHeaderBarHeight || defaultModalHeaderHeight) + 88) : (modalHeaderBarHeight + supplementaryHeaderPadding || defaultModalHeaderHeight)}px)`};
  overflow-y: ${({ desktop }) => (desktop ? '' : 'scroll')};
  overflow-x: ${({ desktop }) => (desktop ? '' : 'hidden')};
`;

export const StyledContentChildren = styled.div`
  height: ${({ theme, desktop }) => (desktop ? `calc(100% - ${theme.spacing[80]})` : '')};
  min-height: ${({
    theme, desktop, showSupplementaryBar, supplementaryBarHeight,
  }) => (desktop ? '' : `calc(100% - ${theme.spacing[92]} ${showSupplementaryBar && supplementaryBarHeight ? `- ${supplementaryBarHeight}px` : ''})`)};
  overflow: ${({ desktop }) => (desktop ? 'auto' : '')};
`;

export const StyledContentButtons = styled.div`
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing[32]};
  margin: 0 -${({ theme }) => theme.spacing[24]} 0;
  height: ${({ theme }) => theme.spacing[80]};
  border-top: ${({ theme }) => `1px solid ${theme.colors.grey100}`};
`;

export const StyledPrimaryButton = styled.div`
  display: inline-block;
`;

export const StyledSecondaryButton = styled.div`
  display: inline-block;
`;

export const StyledSupplementaryBar = styled.div`
  background: ${({ theme }) => theme.colors.primary50};
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[32]};
  margin: 0 -${({ theme }) => theme.spacing[24]} 0;
`;

export const StyledSupplementaryBarItem = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary500};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.spacing[16]};
  margin-bottom: ${({ theme }) => theme.spacing[0]};
  padding-top: ${({ theme, desktop }) => theme.spacing[desktop ? 0 : 8]};
  padding-bottom: ${({ theme, desktop }) => theme.spacing[desktop ? 0 : 8]};
`;

export const StyledSupplementaryBarItemText = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing[0]};
  margin-right: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize.base};
  h6, p {
    margin: 0;
  }
`;

export const StyledSupplementaryBarItemIcon = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing[0]};
  margin-right: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const StyledFlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding-top: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const SeparatorContainer = styled.div`
  display: none;
  height: 100%;

  @media only screen and (min-width: ${({ theme }) => `${theme.flexboxgrid.breakpoints.sm}em`}) {
    display: block;
    margin-right: ${({ theme }) => theme.spacing[16]};
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  h6 {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;
