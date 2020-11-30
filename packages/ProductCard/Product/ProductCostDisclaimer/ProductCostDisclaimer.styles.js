import styled from 'styled-components';
import { Typography } from '@comparethemarketau/manor-typography';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'initial')};
`;

const Sup = styled.sup`
  text-align: right;
`;

const StyledTypography = styled(Typography)`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  text-align: ${({ textAlign }) => textAlign};
`;

export { Wrapper, Sup, StyledTypography };
