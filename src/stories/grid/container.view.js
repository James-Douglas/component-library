
import React from 'react';
import ManorContainer from '../../../src/components/Grid/Container/Container.component.js';
import ManorRow from '../../../src/components/Grid/Row/Row.component.js';

import styles from './container.module.css';
/*import '../../index.css';*/


const ContainerView = props => (
  <div className={`${styles['grid-view']}`}>
     <ManorContainer >
        <ManorRow/>
     </ManorContainer>
  </div>
);

export default ContainerView; 


/* 

<div class="grid-view">
  <Container>
    <Row>
      <h1>Containers</h1>
    </Row>
    <Row>
      <p>
        Two different types of containers, the main container and fluid container. The primary difference being the fluid container is always 100% width, whereas the main container has a max-width of 1900px. The main container also has auto margins to keep centred.
      </p>
      <p>
        The grid also uses a 12 column based system, which is built on top of flexbox technology.
      </p>
    </Row>
    <Row>
      <Column>Col-1</Column>
      <Column>Col-2</Column>
      <Column>Col-3</Column>
      <Column>Col-4</Column>
      <Column>Col-5</Column>
      <Column>Col-6</Column>
      <Column>Col-7</Column>
      <Column>Col-8</Column>
      <Column>Col-9</Column>
      <Column>Col-10</Column>
      <Column>Col-11</Column>
      <Column>Col-12</Column>
    </Row>
  </Container>
  <FluidContainer>
    <Row>
      <Column>Col-1</Column>
      <Column>Col-2</Column>
      <Column>Col-3</Column>
      <Column>Col-4</Column>
      <Column>Col-5</Column>
      <Column>Col-6</Column>
      <Column>Col-7</Column>
      <Column>Col-8</Column>
      <Column>Col-9</Column>
      <Column>Col-10</Column>
      <Column>Col-11</Column>
      <Column>Col-12</Column>
    </Row>
  </FluidContainer>
</div>

<style>



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
 */