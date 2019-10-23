import React from 'react';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import gridStyles from './grid-view-styles';

const AlignmentView = () => (
  <>
    <style jsx>{gridStyles}</style>
    <div className="grid-view">
      <Container>
        <Row className="row-view">
          <h1>Row horizontal alignment</h1>
        </Row>
        <Row className="row-view">
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
        </Row>
        <Row className="row-view justify-center">
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
        </Row>
        <Row className="row-view justify-end">
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
        </Row>
        <Row className="row-view justify-around">
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
        </Row>
        <Row className="row-view justify-between">
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
          <Column className="col-view" col="4">col=&apos;4&apos;</Column>
        </Row>
      </Container>
    </div>
  </>
);

export default AlignmentView;
