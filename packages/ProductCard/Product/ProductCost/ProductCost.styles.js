import styled, { css } from 'styled-components';
import { applySpacing } from '@comparethemarketau/manor-utils';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.hero500};
  font-size: ${({ theme, size }) => theme.fontSize[size]};
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

export { Wrapper, Cents, Sup };
