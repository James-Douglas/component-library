import css from 'styled-jsx/css';

export default css`
/* BASE STYLING
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.manor-button, .manor-button-link {
  transition : all 200ms ease-out;
}
.manor-button {
  @apply shadow-sm flex items-center justify-center rounded-lg px-24 py-12 mb-16 font-bold text-lg capitalize border border-solid border-transparent;
  border-width: 2px; /* IE 11 specific fix */;
  min-height: 5.4rem;
}
.manor-button:focus {
  outline: none;
  box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
}
.btn-icon {
  @apply pointer-events-none;
}
.manor-button-link {
  @apply flex capitalize;
}
.btn-icon{
  padding-left: 1rem;
  padding-right: 1rem;
}
a > .btn-icon {
  padding-right: 1rem;
  padding-top: 0.2rem;
}
.center {
  @apply block;
}

/* PRIMARY BUTTONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.primary {
  @apply bg-green-aa text-white;
  fill: theme(colors.white); 
}
.primary:hover {
  @apply bg-green-hover-aa;
}

/* No onDark mode specified */

/* SECONDARY BUTTONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.secondary {
  @apply bg-white border border-solid border-blue-aa text-blue-aa fill-current font-semibold py-8;
  min-height: 4.4rem; 
}
.secondary:hover {
  @apply border-solid border-blue-aa-hover fill-current text-blue-aa-hover;
}
/* onDark */
.secondary.onDark {
  @apply bg-white border-transparent fill-current text-blue-aa;
}
.secondary.onDark:hover {
  @apply bg-white text-blue-aa-hover fill-current;
}

/* TEXT BUTTONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a.text {
  @apply shadow-none bg-transparent text-black fill-current no-underline;
}
a.text:hover {
  @apply text-blue-aa-hover fill-current;
}
a.text.onDark{
  @apply text-white fill-current;
}
a.text.onDark:hover {
  @apply text-blue-aa-dark-hover fill-current;
}

/* LINKS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a.link {
  @apply shadow-none bg-transparent text-black underline fill-current inline-block;
}
a.link.onDark {
  @apply text-white fill-current;
}
a.link.manor-button-link {
  @apply font-semibold underline;
}
a.link.manor-button-link:hover {
  @apply text-blue-aa-hover fill-current;
}
a.link.onDark.manor-button-link:hover {
  @apply underline text-blue-aa-dark-hover fill-current;
}

/* FOOTER LINKS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a.footer-link {
  @apply shadow-none bg-transparent text-black no-underline block;
}
a.footer-link:hover {
  @apply text-black;
}
a.footer-link.onDark {
  @apply text-white fill-current;
}
a.footer-link.manor-button-link {
  @apply text-sm font-semibold;
  margin-bottom: 1rem;
}
a.footer-link.manor-button-link:hover {
  @apply underline;
}

/* SIZING / DISABLED STATE
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.manor-button.sm {
  @apply w-full;
  max-width: 12rem;
  min-height: 3.6rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.manor-button.sm {
  @apply text-xs font-bold;
}
.manor-button.md {
  min-width: 16rem;
}
.manor-button.lg {
  @apply w-full;
  min-width: 16rem;
}
button:disabled,
button[disabled] {
  @apply cursor-not-allowed shadow-none;
  opacity: 0.6;
}
.align-right {
  @apply flex-row-reverse;
}
`;
