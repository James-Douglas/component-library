import css from 'styled-jsx/css';

export default css`
.checkbox-wrap {
  @apply mb-12;
}
label {
  @apply flex cursor-pointer;
}
.alignment {
  @apply mt-4;
}
.ap {
  @apply absolute;
}
.manor-checkbox {
  @apply bg-white border border-dark-blue w-24 h-24 pointer-events-none;
  border-radius: 0.2rem;
}
.manor-checkbox:hover {
  @apply border-light-blue;
}
.manor-checkbox-input {
  @apply h-0 w-0 opacity-0 float-left;
}
.manor-checkbox-invalid {
  @apply border-2 border-invalid text-invalid fill-current;
}
.manor-checkbox-input:disabled + label > .manor-checkbox {
  @apply cursor-not-allowed;
}
.manor-checkbox-input:disabled + label > .manor-checkbox {
  @apply bg-grey-light border-none opacity-50;
}
.manor-checkbox-input:checked + label > .manor-checkbox {
  @apply bg-dark-blue border-none text-white fill-current;
}
.manor-checkbox-input:checked + label > .manor-checkbox.inverted {
  @apply bg-white border-none text-dark-blue fill-current;
}
.checkbox-content {
  @apply ml-20 pointer-events-none text-base;
}
.manor-checkbox-input:focus + label > .manor-checkbox {
  box-shadow: 0 0 0 1px rgba(0, 123, 255, .5);
}
.disabled {
  @apply pointer-events-none;
}
`;
