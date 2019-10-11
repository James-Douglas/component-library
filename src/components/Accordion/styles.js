import css from 'styled-jsx/css';

export default css`
.accordion {
  border-bottom: 2px solid #999999;
}
.accordion .accordion-body {
    transition: font-size .15s, margin .15s, padding .15s,
                opacity .5s .15s;

}


.accordion.hide {
   border-bottom: 1px solid rgba(0,0,0,.1);
}
.accordion.hide .accordion-body {
    font-size: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    max-height: 0;
    /* fade out, then shrink */
    transition: opacity .15s, font-size .5s .25s, margin .5s .15s, padding .5s .15s, max-height .5s .15s;
}
.accordion-body-wrap {
  margin: 15px 25px 15px 15px; 
}
.accordion-head {
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
