import styled, { css } from 'styled-components';

const StyledTabPanel = styled.div`
  margin-top: 0;
  height: 100%;
  padding: ${({ theme }) => theme.spacing[24]};
  ${({ activeTab, name }) => activeTab !== name
    && css`
      display: none;
    `}
`;

export default StyledTabPanel;
