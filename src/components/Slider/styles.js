import css from 'styled-jsx/css';

export default css`
.animate {
  transition: all 350ms cubic-bezier(0.2, 0, 0, 1);
  @apply fixed z-40 bg-white overflow-auto border-t border-solid border-grey-lighter;
}

.icon-close {
  @apply absolute right-0 cursor-pointer z-50 opacity-50;
}

.bottom {
  @apply w-full left-0;
}
.top {
  @apply w-full left-0;
}
.left {
  @apply h-full top-0;
}
.right {
  @apply h-full top-0;
}

`;
