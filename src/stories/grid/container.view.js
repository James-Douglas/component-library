import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import './grid-view.css';

const ContainerView = ({ classes }) => (
  <div className={`grid-view ${classes}`}>
    <Container>
      <Row classes='row-view'>
        <h1>Containers</h1>
      </Row>
      <Row classes='row-view'>
        {/* eslint-disable-next-line max-len */}
        <p>Two different types of containers, the main container and fluid container. The primary difference being the fluid container is always 100% width, whereas the main container has a max-width of 1900px. The main container also has auto margins to keep centred.</p>
      </Row>
      <Row classes='row-view'>
        {/* eslint-disable-next-line max-len */}
        <p>The grid also uses a 12 column based system, which is built on top of flexbox technology.</p>
      </Row>
      <Row classes='row-view'>
        <Column classes='col-view'>Col-1</Column>
        <Column classes='col-view'>Col-2</Column>
        <Column classes='col-view'>Col-3</Column>
        <Column classes='col-view'>Col-4</Column>
        <Column classes='col-view'>Col-5</Column>
        <Column classes='col-view'>Col-6</Column>
        <Column classes='col-view'>Col-7</Column>
        <Column classes='col-view'>Col-8</Column>
        <Column classes='col-view'>Col-9</Column>
        <Column classes='col-view'>Col-10</Column>
        <Column classes='col-view'>Col-11</Column>
        <Column classes='col-view'>Col-12</Column>
      </Row>
      <Row classes='row-view'>
        <Column classes='col-view'>Col-1</Column>
        <Column classes='col-view'>Col-2</Column>
        <Column classes='col-view'>Col-3</Column>
        <Column classes='col-view'>Col-4</Column>
        <Column classes='col-view'>Col-5</Column>
        <Column classes='col-view'>Col-6</Column>
        <Column classes='col-view'>Col-7</Column>
        <Column classes='col-view'>Col-8</Column>
        <Column classes='col-view'>Col-9</Column>
        <Column classes='col-view'>Col-10</Column>
        <Column classes='col-view'>Col-11</Column>
        <Column classes='col-view'>Col-12</Column>
      </Row>
    </Container>
  </div>
);

ContainerView.propTypes = {
  classes: PropTypes.string,
};

ContainerView.defaultProps = {
  classes: '',
};

export default ContainerView;
