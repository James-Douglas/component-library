import React from 'react';
import FluidContainer from '../../components/Grid/Container/Fluid.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import './grid-view.css';

const FluidContainerView = () => (
  <div className="grid-view">
    <FluidContainer>
      <Row className="row-view">
        <h1>Containers</h1>
      </Row>
      <Row className="row-view">
        {/* eslint-disable-next-line max-len */}
        <p>Two different types of containers, the main container and fluid container. This is the fluid container</p>
      </Row>
      <Row className="row-view">
        <Column className="col-view">Col-1</Column>
        <Column className="col-view">Col-2</Column>
        <Column className="col-view">Col-3</Column>
        <Column className="col-view">Col-4</Column>
        <Column className="col-view">Col-5</Column>
        <Column className="col-view">Col-6</Column>
        <Column className="col-view">Col-7</Column>
        <Column className="col-view">Col-8</Column>
        <Column className="col-view">Col-9</Column>
        <Column className="col-view">Col-10</Column>
        <Column className="col-view">Col-11</Column>
        <Column className="col-view">Col-12</Column>
      </Row>
    </FluidContainer>
  </div>
);

export default FluidContainerView;
