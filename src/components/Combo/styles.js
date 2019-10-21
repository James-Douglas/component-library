import css from 'styled-jsx/css';

export default css`
.combo-wrap{
  @apply relative w-full text-black;
}
ul {
  @apply mt-8 z-20 text-black;
}
.row-view {
  @apply relative;
}
.section-wrap-shadow {
  @apply bg-white shadow-md w-full z-10;
}
.section-wrap-shadow.absolute {
   @apply absolute;
}
ul li {
  @apply text-base text-grey-darker cursor-pointer border border-solid border-transparent;
  padding: 0.7rem 1.1rem;
  transition: background-color 0.4s ease;
}
ul li:nth-last-child(2) {
  @apply pb-20;
}
ul li:hover {
  @apply bg-grey-lighter;
}
ul li:focus {
  @apply border border-solid border-light-blue;
}
.item-manual-lookup {
  @apply justify-around pt-8 pb-8 bg-off-white text-center;
  border: 1px solid transparent
 
}
.item-manual-lookup:focus {
  @apply border border-solid border-light-blue;
  border-width: 1px; /* IE 11 specific fix */
}
.manual-lookup:hover {
  @apply bg-off-white;
}
:global(.highlight) {
  @apply underline;
}

.combo-wrap {
  @apply relative
}

*:focus {
  outline: none;
}
`;
