import React from 'react';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import gridStyles from './grid-view-styles';

const ColumnView = () => (
  <>
    <style jsx>{gridStyles}</style>
    <div className="grid-view">
      <Container>
        <Row className="row-view">
          <h1>Auto-layout columns</h1>
        </Row>
        <Row className="row-view">
          {/* eslint-disable-next-line max-len */}
          <p>For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less className for each breakpoint you need and every column will be the same width.</p>
        </Row>
        <div className="background-wrap">
          <Row className="row-view">
            <Column className="col-view">1 of 2</Column>
            <Column className="col-view">2 of 2</Column>
          </Row>
          <Row className="row-view">
            <Column className="col-view">1 of 3</Column>
            <Column className="col-view">2 of 3</Column>
            <Column className="col-view">3 of 3</Column>
          </Row>
          <Row className="row-view">
            <h1>Setting one column width</h1>
          </Row>
          <Row className="row-view">
            {/* eslint-disable-next-line max-len */}
            <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.  Note that the other columns will resize no matter the width of the center column.</p>
          </Row>
          <Row className="row-view">
            <Column className="col-view">1 of 3</Column>
            <Column className="col-view" col="6">2 of 3 (wider col=&apos;6&apos;)</Column>
            <Column className="col-view">3 of 3</Column>
          </Row>
          <Row className="row-view">
            <h1>Variable width content</h1>
          </Row>
          <Row className="row-view">
            {/* eslint-disable-next-line max-len */}
            <p>Use [breakpoint]==&apos;auto=&apos; props to size columns based on the natural width of their content.</p>
          </Row>
          <Row className="justify-center">
            <Column className="col-view">col</Column>
            <Column className="col-view" md="auto">Variable width content (md=&apos;auto&apos;) some more text to increase width</Column>
            <Column className="col-view">col</Column>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default ColumnView;
