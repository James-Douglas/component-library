import css from 'styled-jsx/css';

export default css`

  .modal-alignment {
    @apply w-full h-full flex justify-center absolute top-0 left-0 pointer-events-none;
    align-items: center;
  }

  @keyframes modalAnimation {
    from {transform: translateY(-20%);opacity: 0;}
    to {transform: translateY(0);opacity: 1;}
  }

  .modal {
    @apply bg-white shadow-lg h-auto pointer-events-auto relative;
    min-height: 30rem;
    z-index: 1000;
    animation-name: modalAnimation;
    animation-duration: .3s;
  }
  
  .icon-close {
    @apply absolute;
    top: 2rem;
    right: 2rem;
  }

  .content {
    @apply px-48 py-24 mt-8;
  }

  .lg {
    @apply w-8/12
  }
  
  .md {
    @apply w-6/12
  }

  .sm {
    @apply w-4/12
  }
`;
