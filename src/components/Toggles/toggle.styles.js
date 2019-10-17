import css from 'styled-jsx/css';

export default css`
 .transition {
    transition : all 200ms ease-out;
  }
  .toggle {
    @apply relative bg-white shadow-sm border cursor-pointer mx-8 mb-16 text-sm font-bold leading-normal;
  }
  .toggle-label {
    @apply w-full cursor-pointer block relative;
  }
  .toggle-label:hover  {
    @apply text-light-blue;
  }
  .icon-toggle:hover  {
    @apply text-light-blue fill-current;
  }
  .toggle-input:checked icon-toggle {
    @apply bg-dark-blue text-white fill-current shadow-none;
  } 
  .toggle-input {
    @apply opacity-0 h-0 w-0 absolute;
  }
  .toggle-input:invalid + label {
    @apply border-invalid text-invalid fill-current;
  }
  .toggle-input:disabled + label:hover {
    @apply cursor-not-allowed;
  }
  .toggle-input:disabled + label {
    @apply text-disabled border-disabled fill-current;
  }
  .toggle-input:checked + label {
    @apply bg-dark-blue text-white shadow-none;
  } 
  .toggle-input:checked + .autofill {
    @apply bg-prechecked text-black fill-current;
  }
  .toggle-input:focus + label {
     box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }
  .square-toggle {
    @apply flex justify-around items-center w-128 h-128 p-8 text-center;
  }
  .rect-toggle {
    @apply h-full flex p-16 items-center text-center;
  }
  .align-left {
    @apply justify-start;
  }
  .align-center {
    @apply justify-center;
  }
  .align-right {
    @apply justify-end;
  }
  .icon-toggle {
    @apply flex flex-col justify-center items-center text-center w-128;
    height: 13rem;
  }
  .icon-label {
    @apply pt-32;
  }
   .image-toggle  {
    @apply w-128 h-128 flex justify-around flex-col items-center;
  }
  .picture-size {
    @apply w-48 h-48 text-center;
  }
`;
