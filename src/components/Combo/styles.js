import css from 'styled-jsx/css';

export default css`
.combo-wrap{
  @apply relative w-full;
}
ul {
  @apply bg-white shadow-md w-full mt-8 z-20;
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
  @apply justify-around pt-8 bg-off-white text-center;
}
.manual-lookup:hover {
  @apply bg-off-white;
}
:global(.highlight) {
  @apply underline;
}
.section-hide {
  margin-top: -15px;
}
`;
