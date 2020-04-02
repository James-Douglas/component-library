import styled, { css } from 'styled-components';

const StyledRow = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: -${({ theme }) => theme.spacing[16]};
margin-right: -${({ theme }) => theme.spacing[16]};
${(props) => (props.reverse) && css`
  flex-direction: row-reverse;
`}
${(props) => (props.flexWrap) && css`
  flex-wrap: ${props.flexWrap};
`}
margin-bottom: ${({ theme, removeMarginBottom }) => (removeMarginBottom ? 0 : theme.spacing[24])};
width: 100%;
`;

export default StyledRow;
