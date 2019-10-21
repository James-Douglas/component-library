import css from 'styled-jsx/css';

export default css`
.tooltip-wrapper {
  @apply flex items-center w-full;
}

.tooltip-icon {
  @apply flex items-center justify-center text-grey fill-current;
}

.tooltip-active {
  @apply text-light-blue;
}

.tooltip-pinned {
  @apply fill-current;
  color: rgba(51, 51, 51, 0.97) !important;
}

.icon-wrapper {
  @apply fill-current;
}

:global(.manor-tooltip-content) {
  @apply p-16 text-left;
}

/* Custom theme for tippy.js, see: https://atomiks.github.io/tippyjs/themes/ for documentation */
@media screen and (min-width: 769px) {
  :global(.tippy-tooltip.manor-theme) {
    @apply max-w-md;
  }
}

:global(.tippy-tooltip.manor-theme) {
  background-color: rgba(51, 51, 51, 0.97) !important;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,.1);
}

:global(.tippy-tooltip.manor-theme) .tippy-content {
  @apply text-left p-12 overflow-auto;
  max-height: 32rem;
}

@media screen and (max-width: 768px) {
  :global(.tippy-popper) {
    @apply inset-x-0;
  }
  :global(.tippy-tooltip) {
    max-width: none !important;
  }
}
/* end tippy.js theme */
`;
