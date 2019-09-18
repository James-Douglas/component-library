<div class="grid-view">
  <Container>
    <Row>
      <h1>Responsive columns</h1>
    </Row>
    <Row>
      <p>
        For grids that are the same from the smallest of devices to the largest, use the col=[value]. Specify a numbered class when you need a particularly sized column; otherwise, feel free to omit all props (auto calculation).
      </p>
    </Row>
    <Row>
      <Column>col</Column>
      <Column>col</Column>
      <Column>col</Column>
      <Column>col</Column>
    </Row>
    <Row>
      <Column>col="8"</Column>
      <Column col="4">col="4"</Column>
    </Row>
    <Row>
      <h1>Stacked to horizontal</h1>
    </Row>
    <Row>
      <p>
        Using a single set of col=sm or sm=[value] props, you can create a basic grid system that starts out stacked before becoming horizontal with at the small breakpoint (sm).
      </p>
    </Row>
     <Row>
        <Column sm="8">sm="8"</Column>
        <Column sm="4">sm="4"</Column>
     </Row>
      <Row>
        <Column col="sm">col="sm"</Column>
        <Column col="sm">col="sm"</Column>
        <Column col="sm">col="sm"</Column>
      </Row>
      <Row>
        <h1>Mix and match</h1>
      </Row>
      <Row>
        <p>
          Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.
        </p>
      </Row>
      <Row>
        <Column sm="4" lg="2">
          sm="4" lg="2"
        </Column>
        <Column sm="4" lg="2">
          sm="4" lg="2"
        </Column>
        <Column sm="4" lg="8">
          sm="4" lg="8"
        </Column>
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

  p {
    font-size: 1.6rem;
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
