import css from 'styled-jsx/css';

export default css`
.accordion {
  transition: color 2s linear;
  @apply overflow-hidden border-b-2 border-grey-dark bg-white;
}
.accordion .accordion-body {
  @apply pt-16 pl-32 pb-24 pr-48 bg-white text-xl leading-normal text-xl h-auto;
  color: rgba(0,0,0,0.8);
  transform: translateY(0);
  transform-origin: top;
  transition: transform 0.3s;
}
.accordion.hide .accordion-body {
  transform: translateY(-100%);
  @apply h-0 p-0;
}
.accordion.hide {
   border-bottom: 1px solid rgba(0,0,0,.1);
}
.accordion-head {
  @apply pt-24 pl-32 pb-24 pr-48 flex justify-between items-center text-base bg-white cursor-pointer text-2xl relative overflow-hidden z-10;
  transition: font-size 0.5s;
}
.accordion.hide .accordion-head  {
   @apply text-lg;
}
.accordion-body {
   @apply text-sm;
}
*:focus {
  outline: none;
}
`;
