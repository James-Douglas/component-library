import css from 'styled-jsx/css';

export default css`
.label-default {
  @apply inline-flex;
}
.manor-textarea-wrapper {
  @apply relative w-256;
}
.manor-textarea-default {
  @apply flex w-256  pl-12 pr-36 block text-base border border-solid border-transparent;
  min-height: 4.4rem;
}
.manor-textarea-default:focus,
.manor-textarea-default:hover {
  @apply border border-solid border-light-blue;
}

textarea:invalid {
  @apply shadow-none;
}
textarea::placeholder {
  @apply italic text-base text-grey;
}
.manor-textarea-border {
  @apply border border-solid border-grey-light;
}

textarea {
  @apply p-16;
}

textarea:focus:enabled, textarea:active:enabled, textarea:hover:enabled {
  @apply outline-none;
}

textarea:focus:enabled {
  @apply border border-solid border-light-blue;
}

textarea[disabled] {
  @apply bg-white cursor-not-allowed;
}
.disabled {
  @apply opacity-50;
}

.manor-maxlength-indicator {
  @apply mr-4;
}
/* Note: this style currently wont be applied if aria-disabled is applied externally */
.manor-bordered-field-disabled-label {
  @apply opacity-50;
}

.lighter {
  fill: theme(colors.grey-light);
}
.darker {
  fill: theme(colors.grey-dark);
}
.manor-textarea-default, .manor-textarea-wrapper {
  @apply w-full;
}
.supporting-elements {
  @apply flex justify-end;
}
.manor-optional-indicator {
  margin-left: 1rem;
}
.invalid {
  @apply border border-solid border-invalid;
}
.max-chars-exceeded {
  @apply text-validation-text;
}

/* **********************************************************************
  Override Autocomplete styles in Chrome
  and include functionality for displaying pre-filled fields
************************************************************************* */
textarea:not([disabled]).manor-prefilled,
textarea:not([disabled]):-webkit-autofill,
textarea:not([disabled]):-webkit-autofill:hover,
textarea:not([disabled]):-webkit-autofill:focus {
  @apply bg-prechecked border border-solid border-prechecked-darker;
  -webkit-text-fill-color: theme(colors.black);
}


/* **********************************************************************
 Override scrollbar styles in moz
************************************************************************* */
.manor-textarea-default {
  @apply overflow-y-scroll;
  scrollbar-color: theme(colors.white) theme(colors.white);
  scrollbar-width: thin;
}

/* **********************************************************************
 Override scrollbar styles in webkit
************************************************************************* */
textarea.manor-textarea-default::-webkit-scrollbar-track {
  @apply rounded-lg;
  -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
}

textarea.manor-textarea-default::-webkit-scrollbar {
  @apply bg-white w-16;
}

textarea.manor-textarea-default::-webkit-scrollbar-thumb {
  @apply bg-white rounded-lg;
  background-image: -webkit-linear-gradient(0deg,
  transparent 20%,
  transparent 20%,
  transparent 40%,
  rgba(238, 238, 238, 1) 40%,
  rgba(238, 238, 238, 1) 60%,
  transparent 60%,
  transparent);
}

textarea:not([disabled]).manor-textarea-default.manor-prefilled::-webkit-scrollbar,
textarea:not([disabled]).manor-textarea-default:-webkit-autofill::-webkit-scrollbar,
textarea:not([disabled]).manor-textarea-default:-webkit-autofill:hover::-webkit-scrollbar,
textarea:not([disabled]).manor-textarea-default:-webkit-autofill:focus::-webkit-scrollbar {
  @apply bg-prechecked;
}

textarea:not([disabled]).manor-textarea-default.manor-prefilled::-webkit-scrollbar-thumb,
textarea:not([disabled]).manor-textarea-default:-webkit-autofill::-webkit-scrollbar-thumb,
textarea:not([disabled]).manor-textarea-default:-webkit-autofill:hover::-webkit-scrollbar-thumb,
textarea:not([disabled]).manor-textarea-default:-webkit-autofill:focus::-webkit-scrollbar-thumb {
  @apply bg-prechecked;
  background-image: -webkit-linear-gradient(0deg,
  transparent 20%,
  transparent 20%,
  transparent 40%,
  rgba(192, 192, 192, 1) 40%,
  rgba(192, 192, 192, 1) 60%,
  transparent 60%,
  transparent);
}

/* *********************************************************************************************************************
  This has been added to attempt to hide the small border around the text area resize icon after removing the scrollbar
********************************************************************************************************************** */
.pull-tab {
  @apply h-0 w-0 absolute z-10 pointer-events-none;
  border-top: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid transparent;
  bottom: 28px;
  right: 6px;
  -webkit-transform: rotate(-225deg);
}

.pull-tab:not(.manor-disabled).manor-prefilled {
  border-top: 12px solid theme(colors.prechecked);
}
`;
