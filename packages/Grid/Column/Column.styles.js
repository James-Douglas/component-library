import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

const StyledColumn = styled(Col)`
  @media only screen and (min-width: ${({ theme }) => `${theme.flexboxgrid.breakpoints.xs}em`}) {
    display: ${({ xs }) => (xs === false ? 'none' : 'flex')};
  }
  @media only screen and (min-width: ${({ theme }) => `${theme.flexboxgrid.breakpoints.sm}em`}) {
    display: ${({ sm }) => (sm === false ? 'none' : 'flex')};
  }
  @media only screen and (min-width: ${({ theme }) => `${theme.flexboxgrid.breakpoints.md}em`}) {
    display: ${({ md }) => (md === false ? 'none' : 'flex')};
  }
  @media only screen and (min-width: ${({ theme }) => `${theme.flexboxgrid.breakpoints.lg}em`}) {
    display: ${({ lg }) => (lg === false ? 'none' : 'flex')};
  }
  align-items: ${(props) => props.valign};
  justify-content: ${(props) => props.halign};
  flex-direction: column;
`;

export default StyledColumn;
