import styled from 'styled-components';
import { applySpacing } from '@comparethemarketau/manor-utils';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: ${({ theme }) => theme.maxWidth.full};
  margin: auto;
  ${({ padding, theme }) => applySpacing(theme, 'padding', padding)};
  max-width: ${({ theme }) => theme.container.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default StyledContainer;
