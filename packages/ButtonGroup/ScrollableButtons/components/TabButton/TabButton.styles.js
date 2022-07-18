import styled from 'styled-components';
import { Typography } from '@comparethemarketau/manor-typography';

export const TabButtonContainer = styled.li`
  display: inline-block;
  list-style: none;
  ${({ selected, theme }) => selected && `
    p {
      border-bottom: 0.2rem solid ${theme.colors.primary500};
    }
  `}

  a:focus-visible {
    outline: ${({ theme }) => theme.colors.primary500} auto 1px;
    outline-offset: -1px;
  }

  /*
  * @media (hover: hover): Prevent sticky hover effects for buttons on touch devices
  * If the browser supports proper/true/real/non-emulated hovering, then apply styles included when the button is hovered over.
  * ref:1: https://www.w3.org/TR/mediaqueries-4/#descdef-media-hover
  *     2: https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices
  */
  @media (hover: hover) {
    :hover {
      background: ${({ theme }) => theme.button.tertiary.backgroundHover};
  }
`;

export const TextContainer = styled(Typography)`
  padding-top: ${({ theme }) => theme.spacing['12']};
  padding-right: ${({ theme }) => theme.spacing['24']};
  padding-bottom: ${({ theme }) => theme.spacing['12']};
  padding-left: ${({ theme }) => theme.spacing['24']};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey700};

  ${({ selected, theme }) => selected && `color: ${theme.colors.primary500};
      &:after {
        font-size: ${theme.fontWeight.bold};
      }`}
`;
