import css from 'styled-jsx/css';

export default css`
.separator {
  @apply m-0 p-0 border-none; 
}
.horizontal {
  @apply h-0 w-full my-32; 
  border-bottom: 1px solid #D7D7D7;
}
.vertical {
  @apply h-full w-0 mx-32;
  border-right: 1px solid #D7D7D7;
}
`;
