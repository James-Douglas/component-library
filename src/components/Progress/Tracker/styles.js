import css from 'styled-jsx/css';

export default css`

.progress-step {
   @apply text-black;
   @apply flex justify-center items-center;
}

.progress-step.active {
   @apply font-bold;
}

.progress-step.disabled {
  @apply text-grey-dark border-grey-dark;
}

.progress-step.disabled:hover {
  @apply cursor-not-allowed;
}
.progress-container {
  @apply relative w-full shadow-progress text-sm;
}

.progress-container.stuck {
  @apply fixed top-0 z-50;
  height: auto;
}

.progress {
  @apply absolute top-0 left-0 h-full w-full bg-white;
}

/* ie11 */
progress[value]  {
  color: #cfefc2;
  background: #f3f3f3;

  /* Reset the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Get rid of default border in IE. */
  border: none;
}

/* ie11 & edge remove black right border */
progress::-ms-fill {
  border-color: currentColor;
}

.stuck progress[value]  {
  background: #fff;
}

.progress::-webkit-progress-bar {
  @apply bg-grey-lighter;
  transition: background-color 300ms ease-in-out;
}

.stuck .progress::-webkit-progress-bar {
  @apply bg-white;
}

.progress::-moz-progress-bar {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfefc2+0,c3e4cf+100 */
  background: #cfefc2; /* Old browsers */
  background: -moz-linear-gradient(left, #cfefc2 0%, #c3e4cf 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #cfefc2 0%,#c3e4cf 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #cfefc2 0%,#c3e4cf 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfefc2', endColorstr='#c3e4cf',GradientType=1 ); /* IE6-9 */

  @apply rounded-r-full;
  transition : width 0.4s ease-in-out;
}

.progress::-webkit-progress-value {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfefc2+0,c3e4cf+100 */
  background: #cfefc2; /* Old browsers */
  background: -moz-linear-gradient(left, #cfefc2 0%, #c3e4cf 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #cfefc2 0%,#c3e4cf 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #cfefc2 0%,#c3e4cf 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfefc2', endColorstr='#c3e4cf',GradientType=1 ); /* IE6-9 */

  @apply rounded-r-full;
  transition : width 0.4s ease-in-out;
}

.progress.complete::-webkit-progress-value {
  @apply rounded-none;
}

.progress.complete::-moz-progress-bar {
  @apply rounded-none;
}

.sticky {
  @apply fixed top-0;
}

.progress-icon {
  @apply border-2 border-black border-solid inline-flex items-center justify-center rounded-full mr-16;
  height: 3rem;
  width: 3rem;
}

.progress-icon.mobile {
  @apply border-none;
}

.progress-icon.active {
  @apply border-2 border-black border-solid text-white bg-black;
}

.progress-icon.disabled {
  @apply border-grey-dark;
}

.progress-link {
  @apply flex justify-center items-center text-black border-black;
}

.steps {
  @apply flex relative justify-between items-center w-full flex;
  height: 4.4rem;          /* 44px */
}

.scale-on-hover  {
  @apply flex justify-center items-center;
}

.scale-on-hover  div {
  transition: all 0.1s ease-out;
}

.scale-on-hover:hover div {
  transform: scale(1.1) translate(0.3rem, 0);
}

@keyframes forwardsKey {
  0% { transform: translateX(-5rem); }
  100% { transform: translateX(0); }
}

.label {
  @apply relative flex items-center font-semibold;
  animation: 0.4s ease-in-out 0.3s 1 forwardsKey;
  height: 2.4rem;      /* 24px */
}

.sticky {
  @apply fixed top-0;
}

`;
