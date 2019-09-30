import css from 'styled-jsx/css';

export default css`
.loading-container {
  @apply flex flex-col items-center items-center justify-center mx-0 mt-80;
}

h2 {
  @apply text-lg font-bold mx-4 my-24 text-center;
}

.dot-pulse {
  @apply bg-black text-black rounded-full relative;
  left: -999.9rem;        /* -9999px */
  width: 0.96rem;         /*   9.6px */
  height: 0.96rem;        /*   9.6px */
  box-shadow: 999.9rem 0 0 -0.5rem  theme('colors.black');
  animation: dotPulse 1.5s infinite linear;
  animation-delay: .25s;
}

.dot-pulse::before, .dot-pulse::after {
  @apply bg-black text-black rounded-full inline-block absolute;
  content: '';
  top: 0;
  width: 0.96rem;        /*   9.6px */
  height: 0.96rem;       /*   9.6px */
}

.dot-pulse::before {
  box-shadow: 998.4rem 0 0 -0.5rem  theme('colors.black');
  animation: dotPulseBefore 1.5s infinite linear;
  animation-delay: 0s;
}

.dot-pulse::after {
  box-shadow: 1001.4rem 0 0 -0.5rem  theme('colors.black');
  animation: dotPulseAfter 1.5s infinite linear;
  animation-delay: .5s;
}

@keyframes dotPulseBefore {
  0% {
    box-shadow: 998.4rem 0 0 -0.5rem  theme('colors.black');
  }
  30% {
    box-shadow: 998.4rem 0 0 0.2rem  theme('colors.black');
  }
  60%,
  100% {
    box-shadow: 998.4rem 0 0 -0.5rem  theme('colors.black');
  }
}

@keyframes dotPulse {
  0% {
    box-shadow: 999.9rem 0 0 -0.5rem  theme('colors.black');
  }
  30% {
    box-shadow: 999.9rem 0 0 0.2rem  theme('colors.black');
  }
  60%,
  100% {
    box-shadow: 999.9rem 0 0 -0.5rem  theme('colors.black');
  }
}

@keyframes dotPulseAfter {
  0% {
    box-shadow: 1001.4rem 0 0 -0.5rem  theme('colors.black');
  }
  30% {
    box-shadow: 1001.4rem 0 0 0.2rem  theme('colors.black');
  }
  60%,
  100% {
    box-shadow: 1001.4rem 0 0 -0.5rem  theme('colors.black');
  }
}
`;
