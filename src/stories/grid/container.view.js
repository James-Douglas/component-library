import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import styles from './container.module.css';

const ContainerView = ({ classes }) => (
  <div className={`${styles['grid-view']} ${classes}`}>
    <Container>
      <Row>
        <h1>Containers</h1>
      </Row>
      <Row>
        {/* eslint-disable-next-line max-len */}
        <p>Two different types of containers, the main container and fluid container. The primary difference being the fluid container is always 100% width, whereas the main container has a max-width of 1900px. The main container also has auto margins to keep centred.</p>
      </Row>
      <Row>
        {/* eslint-disable-next-line max-len */}
        <p>The grid also uses a 12 column based system, which is built on top of flexbox technology.</p>
      </Row>
      <Row>
        <Column>
          <p>Col-1</p>
        </Column>
        <Column><p>Col-2</p></Column>
        <Column>Col-3</Column>
        <Column>Col-4</Column>
        <Column>Col-5</Column>
        <Column>Col-6</Column>
        <Column>Col-7</Column>
        <Column>Col-8</Column>
        <Column>Col-9</Column>
        <Column>Col-10</Column>
        <Column>Col-11</Column>
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
