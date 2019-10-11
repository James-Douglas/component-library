import css from 'styled-jsx/css';

export default css`
.callout {
  @apply text-base font-semibold leading-tight;
  @apply border-l-4 bg-white py-12 px-20 text-base font-semibold leading-tight;
}
.info {
 border-left-color: @apply border-l-warning;
}
.warning {
  border-left-color: @apply border-l-info;
}
@media screen and (max-width: 768px) {
  .callout {
     @apply text-base font-normal;
  }
}
`;
