<div class="grid-view">
  <Container>
    <Row>
      <h1>Column offsets</h1>
    </Row>
    <Row>
      <Column col="4" offset="4">col="4" offset="4"</Column>
    </Row>
    <Row>
      <Column col="3" offset="2">col="3" offset="2"</Column>
      <Column col="3" offset="2">col="3" offset="2"</Column>
    </Row>
    <Row>
      <Column col="1">col="1" offset="1"</Column>
      <Column col="1" offset="1">col="1" offset="1"</Column>
      <Column col="1" offset="1">col="1" offset="1"</Column>
      <Column col="1" offset="1">col="1" offset="1"</Column>
      <Column col="1" offset="1">col="1" offset="1"</Column>
      <Column col="1" offset="1">col="1" offset="1"</Column>
    </Row>
  </Container>
</div>

<style>

  .grid-view {
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
  }

  .grid-view :global(.row) {
    margin-bottom: 2rem;
    border: 0.1rem dashed lightblue;
  }

  .grid-view :global(div[class*="col"]) {
    border: 0.1rem solid #1c3e94;
    background: rgba(28, 62, 148, 0.2);
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>

<script>
  import Container from '../../src/Grid/Container/Container.svelte';
  import FluidContainer from '../../src/Grid/Container/Fluid.svelte';
  import Row from '../../src/Grid/Row/Row.svelte';
  import Column from '../../src/Grid/Column/Column.svelte';
  import { getBreakpoint } from '@comparethemarketau/manor-config/utils/breakpoint';
  import { onMount } from 'svelte';

  export let breakpoint = getBreakpoint();

  onMount(() => {
    window.addEventListener('resize', resize);
    resize();
  });

  function resize() {
    breakpoint = getBreakpoint();
  }
</script>
