import styled, { css } from 'styled-components';

export const StyledLabelContainer = styled.div`
  position: relative;
  margin-bottom: ${({ theme, inFieldLabel }) => (inFieldLabel ? 0 : theme.spacing[8])};
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.label.color};
  ${({
    theme, inFieldLabel, prefixContent, breakpoint,
  }) => inFieldLabel && css`
    position: absolute;
    z-index: ${theme.zIndex[10]};
    visibility: hidden;
    
    padding-left: 9px;
    left: 0;
    text-transform: uppercase;
    color: ${theme.label.inField};
    font-weight: bold;
    font-size: ${breakpoint === 'xl' || breakpoint === 'xxl' ? theme.fontSize.xs : theme.fontSize['2xs']};
    letter-spacing: 0.1em;
    line-height: 15px;
  `}
`;
