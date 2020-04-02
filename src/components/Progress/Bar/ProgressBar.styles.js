import styled, { css } from 'styled-components';

export const StyledBar = styled.div`
  width: 100%;
  height: 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  z-index: ${({ theme }) => (theme.zIndex[30])};
  position: ${({ isSticky, stuck }) => (isSticky || stuck ? 'fixed' : 'relative')};
  top: ${({ isSticky, stuck }) => (isSticky || stuck ? '0' : 'inherit')};
`;

export const sharedStyleProgress = css`
  background: ${({ theme }) => theme.progress.bar.progressBackground};
  transition: width 0.4s ease-in-out;
  border-radius:  ${({ theme, value }) => (value.toString() === '100' ? theme.borderRadius.none : `0 ${theme.borderRadius.full} ${theme.borderRadius.full} 0`)};
`;

export const StyledProgress = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* IE-11 styling */
  color: ${({ theme }) => theme.progress.bar.progressBackground};
  &[value]  {
    /* Reset the default appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Get rid of default border in IE. */
    border: none;
  }
  
  ::-webkit-progress-bar {
    background: ${({ theme }) => theme.progress.bar.backgroundValue};
  }
  ::-webkit-progress-value {
    ${sharedStyleProgress}
  }
  /* ie11 & edge remove black right border */
  &::-ms-fill {
    border-color: currentColor;
  }
  ::-moz-progress-bar {
    ${sharedStyleProgress}
  }
`;
