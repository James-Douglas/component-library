<svelte:options tag='ctm-picture' />
<picture>
  {#each srcsets as data }
  <source {...data} />
  {/each}
  <img {src} {alt} {title} />
</picture>

<style>

  picture {
    height: 100%;
  }

  img {
    height: 100%;
    object-fit: contain;
    object-position: left;
  }
</style>

<script>
  export let style = '';
  export let src = 'https://via.placeholder.com/249x44';
  export let srcsets = [];
  export let alt = 'a placeholder image';
  export let title = 'a placeholder title';
</script>
