import css from 'styled-jsx/css';

export default css`
.accordion {
  transition: color 2s linear;
  @apply overflow-hidden border-b-2 border-grey-dark bg-white;
}
.accordion .accordion-body {
  @apply pb-24 bg-white leading-normal h-auto m-0;
  color: rgba(0,0,0,0.8);
  transform: translateY(0);
  transform-origin: top;
  transition: transform 0.25s;
}
.accordion.hide .accordion-body {
  transform: translateY(-100%);
  @apply h-0 p-0;
}
.accordion.hide {
   border-bottom: 1px solid rgba(0,0,0,.1);
}
.accordion-head {
  @apply pt-24 pb-24 bg-white cursor-pointer relative overflow-hidden z-10;
  transition: font-size 0.25s;
}
.accordion.hide .accordion-head  {
   transition: font-size 0.2s;
}
.accordion-caret {
   @apply flex items-center justify-end w-full;
}
.accordion:focus, .accordion:active, .accordion:hover,
.accordion-head:focus, .accordion-head:active, .accordion-head:hover,
.accordion-body:focus, .accordion-body:active, .accordion-body:hover {
  @apply outline-none;
}
.accordion:focus,
.accordion.hide:focus,
.accordion.on-focus {
  border: 1px solid hsl(216, 90%, 73%);
 }
`;
