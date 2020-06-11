import styled from 'styled-components';
import { Row, Column } from '@comparethemarketau/manor-grid';

export const StyledRow = styled(Row)`
  border: 1px dashed ${(props) => props.theme.colors.brandLightBlue};
`;

export const StyledCol = styled(Column)`
  border: 1px solid ${(props) => props.theme.colors.brandDarkBlue};
  background: rgba(28, 62, 148, 0.2);
  height: 10rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const StyledIcon = styled.div`
  margin-left: 3.2rem;
  margin-top: 3.2rem;
`;
