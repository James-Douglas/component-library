import React from 'react';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import gridStyles from './grid-view-styles';

const ContainerView = () => (
  <>
    <style jsx>{gridStyles}</style>
    <div className="grid-view">
      <Container>
        <Row className="row-view">
          <h1>Containers</h1>
        </Row>
        <Row className="row-view">
          {/* eslint-disable-next-line max-len */}
          <p>Two different types of containers, the main container and fluid container. The primary difference being the fluid container is always 100% width, whereas the main container has a max-width of 1900px. The main container also has auto margins to keep centred.</p>
        </Row>
        <Row className="row-view">
          {/* eslint-disable-next-line max-len */}
          <p>The grid also uses a 12 column based system, which is built on top of flexbox technology.</p>
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
      </Container>
    </div>
  </>
);

export default ContainerView;
