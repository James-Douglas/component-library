import css from 'styled-jsx/css';

export default css`
.input-wrap-default {
  @apply relative w-256;
}

.input-default {
  @apply w-256  pl-12 block text-base border border-solid border-transparent;
  min-height: 4.4rem;
  padding-right: 3.6rem;
}

input:invalid {
  @apply shadow-none;
}

input::placeholder {
  @apply italic text-base text-grey;
}

.fix-wrap {
  @apply flex border border-solid border-transparent;
}

.fix-wrap:hover {
  @apply border border-solid border-light-blue;
}

.fix-wrap-focus {
  @apply border border-solid border-light-blue;
}

.input-border {
  @apply border border-solid border-grey-light;
}

.input-border-right {
  border-right-color: theme(colors.grey-light);
}

.input-border-left {
  border-left-color: theme(colors.grey-light);
}

input:focus, input:active, input:hover {
  @apply outline-none;
}

input[disabled] {
  @apply bg-white cursor-not-allowed;
}

.disabled {
  @apply opacity-50;
}

.lighter {
  fill: theme(colors.grey-light);
}

.darker {
  fill: theme(colors.grey-dark);
}

#input-close-button:hover {
  fill: theme(colors.light-blue);
}

.input-default, .input-wrap-default {
 @apply w-full;
}

.input-close-wrap {
  @apply relative w-full;
  min-height: 4.4rem;
}

#input-close-button {
  @apply absolute w-40 h-40;
  right: 0.2rem;
  top: 0.2rem;
  transition: .2s ease-in-out all;
}

.supporting-elements {
  @apply flex justify-end w-full pt-8;
}

.manor-optional-indicator {
  margin-left: 1rem;
}

.prefix, .suffix {
  @apply flex items-center justify-center text-base font-bold;
  padding: 0.9rem 1.4rem;
  min-height: 4.4rem;
}

.prefix {
  padding-right: 0.5rem;
}

.suffix {
  padding-left: 0.5rem;
}

.invalid {
  @apply border border-solid border-invalid;
}

.prefix-no-border {
  @apply bg-white border border-solid border-transparent;
}

.suffix-no-border {
  @apply bg-white border border-solid border-transparent;
}

.manor-prefilled-border {
  @apply border border-solid border-prechecked-darker;
}

.manor-prefilled,
.input-default:-webkit-autofill,
.input-default:-webkit-autofill:hover,
.input-default:-webkit-autofill:focus {
  @apply bg-prechecked;
  -webkit-text-fill-color: theme(colors.black);
}

::-ms-clear {
  display: none;
}

`;
