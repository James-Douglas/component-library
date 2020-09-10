import styled, { css } from 'styled-components';
import { applySpacing } from '@comparethemarketau/manor-utils';

const StyledTabPanel = styled.div`
  margin-top: 0;
  height: 100%;
  ${({ theme, padding }) => applySpacing(theme, 'padding', padding)};
  ${({ activeTab, name }) => activeTab !== name
    && css`
      display: none;
    `}
`;

export default StyledTabPanel;
