<div class="grid-view">
  <Container>
    <Row>
      <h1>Auto-layout columns</h1>
    </Row>
    <Row>
      <p>
        For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.
      </p>
    </Row>
    <div class="background-wrap">
      <Row>
        <Column>1 of 2</Column>
        <Column>2 of 2</Column>
      </Row>
      <Row>
        <Column>1 of 3</Column>
        <Column>2 of 3</Column>
        <Column>3 of 3</Column>
      </Row>
      <Row>
        <h1>Setting one column width</h1>
      </Row>
      <Row>
        <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.  Note that the other columns will resize no matter the width of the center column.</p>
      </Row>
      <Row>
        <Column>1 of 3</Column>
        <Column col="6">2 of 3 (wider col="6")</Column>
        <Column>3 of 3</Column>
      </Row>
      <Row>
        <h1>Variable width content</h1>
      </Row>
      <Row>
        <p>Use [breakpoint]="auto" props to size columns based on the natural width of their content.</p>
      </Row>
      <Row classes="justify-center">
        <Column>col</Column>
        <Column md="auto">Variable width content (md="auto") some more text to increase width</Column>
        <Column>col</Column>
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
    /*max-width: 960px;*/
    /*padding: 0 1.5rem;*/
    /*margin: 0 auto;*/
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
