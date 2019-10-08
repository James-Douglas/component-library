import css from 'styled-jsx/css';

export default css`
.accordion {
  transition: color 2s linear;
  border-bottom: 2px solid #999999;
}
.accordion.hide {
   border-bottom: 1px solid rgba(0,0,0,.1);
}
.accordion.hide .accordion-body {
  display: none;
}
.accordion > * {
  padding: 15px 25px 15px 15px; 
}
.accordion-head {
  @apply flex justify-between items-center;
  @apply font-bold text-base;
  @apply bg-white cursor-pointer;
}
.accordion-body {
   @apply text-sm;
}
`;
