import css from 'styled-jsx/css';

export default css`
header {
  @apply flex w-full bg-white z-50;
  height: 6rem;        /* 60px */
}

.wrap {
  @apply flex h-full w-full justify-between items-center;
}

.sticky {
  @apply fixed top-0;
  height: 6rem;        /* 60px */
}

.stuck {
  @apply shadow z-50;
  height: 4.4rem;        /* 44px */
  transition: all 200ms ease;
}
`;
