import styled from 'styled-components';
import { Typography } from '@comparethemarketau/manor-typography';

const Wrapper = styled.div``;

const StyledTypography = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export { Wrapper, StyledTypography };
