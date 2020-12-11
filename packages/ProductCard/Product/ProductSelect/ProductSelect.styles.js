import styled, { css } from 'styled-components';
import { Button } from '@comparethemarketau/manor-button';

export const Wrapper = styled.div`
  max-width: 15rem;
`;

export const StyledButton = styled(Button)`
  ${({ slimButton, theme }) => slimButton && css`
    padding: ${theme.spacing[8]};
  `}
`;
