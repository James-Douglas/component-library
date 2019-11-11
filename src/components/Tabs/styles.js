import css from 'styled-jsx/css';

export default css`

  /* Container
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .tabs-container {
    @apply w-full;
    min-width: 18rem;
  }

  .tab-border {
    @apply border border-solid border-grey-light shadow-sm;
    border-width: 1px; /* IE 11 specific fix */
  }

  /* Tab buttons
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .tab-button-wrap {
    @apply flex flex-wrap text-blue-aa bg-white ;
  }

  .tab-button:not(:first-child) {
    @apply ml-24;
  }

  .tab-button {
    @apply p-12 pt-20 border-b border-solid border-transparent max-w-full;
    border-bottom-width: 0.5rem;
    -ms-flex-preferred-size: 0;
    flex-basis: 0%;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .tab-button:focus {
    outline: none;
  }
  :global(.tab-button p, .tab-button h1, .tab-button h2, .tab-button h3, .tab-button h4, .tab-button h5, .tab-button h6) {
    margin: 0;
  }
  
  .tab-button.active {
    @apply border-b border-solid border-blue-aa;
    border-bottom-width: 0.5rem;
    transition: .3s ease-out border;
  }

  /* Tab Panels
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .tab-panel {
    @apply mt-0;
    height: 100%;
  }
`;
