import css from 'styled-jsx/css';

export default css`
  .transition {
    transition : all 200ms ease-out;
  }
  .toggle {
    @apply relative bg-white shadow-sm border cursor-pointer mx-8 mb-16 w-full text-sm font-bold leading-normal;
  }
  .toggle:hover {
    @apply text-light-blue fill-current;
  }
  
`;
