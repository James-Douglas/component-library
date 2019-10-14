import css from 'styled-jsx/css';

export default css`
.accordion {
  transition: color 2s linear;
  border-bottom: 2px solid #999999;
  overflow: hidden;
}
.accordion .accordion-body {
  @apply pt-16 pl-32 pb-24 pr-48 bg-white text-xl leading-normal text-xl;
  color: rgba(0,0,0,0.8);
  display: block;
}
.accordion.hide .accordion-body {
  display: none;
}

.accordion.hide {
   border-bottom: 1px solid rgba(0,0,0,.1);
}
.accordion > * {
  @apply bg-white;
}
.accordion-head {
  @apply pt-24 pl-32 pb-24 pr-48 flex justify-between items-center text-base bg-white cursor-pointer text-2xl;
  transition: font-size 0.5s; 
  overflow: hidden;
  z-index:2;
  position: relative;
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
