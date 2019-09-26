import css from 'styled-jsx/css';

export default css`
.large {
 @apply text-xl;
}

.large.mobile {
 @apply text-lg;
}

.small {
 @apply text-base;
}

.small.mobile {
 @apply text-sm;
}

.contact {
 @apply text-grey-darkest flex items-center;
 transition: all 200ms ease;
}

.contact:hover {
 @apply text-link;
 fill: #164AD9;
}

.link-iframe {
 @apply invisible absolute;
}

.mx-4 {
 margin-left: 0.4rem;
 margin-right: 0.4rem;
}
`;
