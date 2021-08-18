import styled from 'styled-components';
import { applySpacing } from '@comparethemarketau/manor-utils';

const StyledCard = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: ${({ theme }) => theme.spacing['80']};
  min-height: ${({ theme }) => theme.spacing['80']};
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ shadow, theme }) => (shadow ? theme.card.shadow : 'none')};
  border: ${({ theme }) => theme.card.border};
  ${({ margin, theme }) => applySpacing(theme, 'margin', margin)};
  ${({ padding, theme }) => applySpacing(theme, 'padding', padding)};
`;

export default StyledCard;
