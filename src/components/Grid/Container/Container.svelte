<svelte:options tag='ctm-container' />
<div class="container fixed {classes}">
  <slot></slot>
</div>

<style>
  @import './container.css';

  .fixed {
    @apply flex max-w-6xl relative mx-auto flex-col;
  }
</style>

<script >
  export let classes = '';
</script>
