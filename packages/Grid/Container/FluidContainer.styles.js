import styled from 'styled-components';
import { applySpacing } from '@comparethemarketau/manor-utils';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  ${({ padding, theme }) => applySpacing(theme, 'padding', padding)};
`;

export default StyledContainer;
