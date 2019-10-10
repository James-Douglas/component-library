import css from 'styled-jsx/css';

export default css`
.callout {
  border-left-width: 4px;
  @apply bg-white;
  padding: 10px 20px;
  @apply text-base font-semibold leading-tight;
}
.info {
 border-left-color: #143D96;
}
.warning {
  border-left-color: #fcc85f;
}
@media screen and (max-width: 768px) {
  .callout {
     @apply text-base font-normal;
  }
}
`;
