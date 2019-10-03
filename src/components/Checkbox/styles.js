import css from 'styled-jsx/css';

export default css`
label {
  @apply flex cursor-pointer;
}
.manor-checkbox {
  @apply bg-white border border-dark-blue mb-8 w-24 h-24 pointer-events-none;
  border-radius: 0.2rem;
}
.manor-checkbox:hover {
  @apply border-light-blue;
}
.manor-checkbox-input {
  opacity: 0;
  width: 0;
  height: 0;
}
.manor-checkbox-input:invalid + label > .manor-checkbox{
  @apply border-invalid text-invalid fill-current;
}
.manor-checkbox-input:disabled + label > .manor-checkbox{
  @apply cursor-not-allowed;
}
.manor-checkbox-input:disabled + label > .manor-checkbox{
  @apply bg-grey-light border-none opacity-50;
}
.manor-checkbox-input:checked + label > .manor-checkbox {
  @apply bg-dark-blue border-none text-white fill-current;
}
.manor-checkbox-input:checked + label > .manor-checkbox.inverted {
  @apply bg-white border-none text-dark-blue fill-current;
}
.checkbox-content {
  @apply ml-20 pointer-events-none;
}
.manor-checkbox-input:focus + label > .manor-checkbox {
  box-shadow: 0 0 0 1px rgba(0, 123, 255, .5);
}
.disabled {
  @apply pointer-events-none;
}
`;
