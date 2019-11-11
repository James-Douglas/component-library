import css from 'styled-jsx/css';

export default css`
.root-table {
  @apply table border-collapse w-full;
  border-spacing: 0;
}
.root-table-body {
  display: table-row-group;
}
.root-table-head {
  display: table-header-group
 }
.root-table-row {
  color: inherit;
  @apply table-row align-middle;
}
.root-table-row-hover:hover {
   @apply bg-grey-lighter;
}
.root-table-cell {
  @apply table-cell;
  vertical-align: inherit;
}
.table-padding-small {
  @apply p-4;
}
.table-padding-medium {
  @apply p-8;
}
.padding-checkbox {
  @apply p-8;
}
.padding-none {
  @apply pl-0;
}
`;
