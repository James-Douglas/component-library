import styled, { css } from 'styled-components';
import { Row as FlexRow } from 'react-styled-flexboxgrid';

const StyledFlexRow = styled(FlexRow)`
  margin-bottom: ${({ theme, removeMarginBottom }) => (removeMarginBottom ? 0 : theme.spacing[24])};
  ${(props) => (props.flexWrap) && css`
    flex-wrap: ${props.flexWrap};
  `};
  ${(props) => (props.reverse) && css`
    flex-direction: row-reverse;
  `};
  justify-content: ${(props) => props.justify};
`;

export default StyledFlexRow;
