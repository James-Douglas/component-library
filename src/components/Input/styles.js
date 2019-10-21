import css from 'styled-jsx/css';

export default css`
.input-container {
  @apply relative;
}

.input-default, .input-container {
  @apply w-full;
 }

.input-default {
  @apply pl-12 block text-base border border-solid border-transparent;
  border-width: 1px; /* IE 11 specific fix */
  height: 4.4rem;
  padding-right: 3.6rem;
}

input:invalid {
  @apply shadow-none;
}

input::placeholder {
  @apply italic text-base text-grey;
}

.input-wrap {
  @apply flex border border-solid border-transparent;
  border-width: 1px; /* IE 11 specific fix */
}

.input-wrap:hover:not(.disabled) {
  @apply border border-solid border-light-blue;
  border-width: 1px; /* IE 11 specific fix */
}

.input-border {
  @apply border border-solid border-grey-light;
  border-width: 1px; /* IE 11 specific fix */
}

.input-border-right {
  border-right-color: theme(colors.grey-light);
  border-width: 1px; /* IE 11 specific fix */
}

.input-border-left {
  border-left-color: theme(colors.grey-light);
  border-width: 1px; /* IE 11 specific fix */
}

input:focus, input:active, input:hover {
  @apply outline-none;
}

input[disabled] {
  @apply bg-white cursor-not-allowed;
}

.lighter {
  fill: theme(colors.grey-light);
}

.darker {
  fill: theme(colors.grey-dark);
}

.input-clear-wrap {
  @apply relative w-full;
  min-height: 4.4rem;
}

.input-clear-button {
  @apply absolute w-40 h-40;
  right: 0.2rem;
  top: 0.2rem;
  transition: .2s ease-in-out all;
}

.input-clear-button:hover {
  fill: theme(colors.light-blue);
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
  height: 4.4rem;
}

.prefix {
  padding-right: 0.5rem;
}

.suffix {
  padding-left: 0.5rem;
}

.invalid {
  @apply border border-solid border-invalid;
  border-width: 1px; /* IE 11 specific fix */
}

.prefix-no-border {
  @apply bg-white border border-solid border-transparent;
}

.suffix-no-border {
  @apply bg-white border border-solid border-transparent;
}
.manor-prefilled {
  @apply bg-prechecked;
}
.manor-prefilled-border {
  @apply border border-solid border-prechecked-darker;
  border-width: 1px; /* IE 11 specific fix */
}

.input-wrap-focus {
  @apply border border-solid border-light-blue;
  border-width: 1px; /* IE 11 specific fix */
}

.disabled {
  @apply opacity-50;
}

.input-default:-webkit-autofill,
.input-default:-webkit-autofill:hover,
.input-default:-webkit-autofill:focus {
  -webkit-text-fill-color: theme(colors.black);
}

::-ms-clear {
  display: none;
}

.list {
  margin-top: -8px;
}
.list.up-list {
  margin-top: -22px;
}
`;
