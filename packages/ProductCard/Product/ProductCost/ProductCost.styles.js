import styled, { css } from 'styled-components';
import { applySpacing } from '@comparethemarketau/manor-utils';
import { Tooltip } from '@comparethemarketau/manor-tooltip';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.hero500};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  ${({ alignRight }) => alignRight && css`
    text-align: right;
  `};
  ${({ theme, padding }) => applySpacing(theme, 'padding', padding)};
`;

const Cents = styled.span`
  font-size: 0.8em;
`;

const Sup = styled.sup`
  vertical-align: text-top;
`;

const StyledTooltip = styled(Tooltip)`
  ${({ verticalAlign }) => verticalAlign && css`
    vertical-align: ${verticalAlign};
  `};
`;

export {
  Wrapper, Cents, Sup, StyledTooltip,
};
