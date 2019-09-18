import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import styles from './alignment.module.css';

const AlignmentView = ({ classes }) => (
  <div className={`${styles['grid-view']} ${classes}`}>
    <Container>
      <Row>
        <h1>Row horizontal alignment</h1>
      </Row>
      <Row>
        <Column col="4">col=&apos;4&apos;</Column>
        <Column col="4">col=&apos;4&apos;</Column>
      </Row>
      <Row classes="justify-center">
        <Column col="4">col=&apos;4&apos;</Column>
        <Column col="4">col=&apos;4&apos;</Column>
      </Row>
      <Row classes="justify-end">
        <Column col="4">col=&apos;4&apos;</Column>
        <Column col="4">col=&apos;4&apos;</Column>
      </Row>
      <Row classes="justify-around">
        <Column col="4">col=&apos;4&apos;</Column>
        <Column col="4">col=&apos;4&apos;</Column>
      </Row>
      <Row classes="justify-between">
        <Column col="4">col=&apos;4&apos;</Column>
        <Column col="4">col=&apos;4&apos;</Column>
      </Row>
    </Container>
  </div>
);

AlignmentView.propTypes = {
  classes: PropTypes.string,
};

AlignmentView.defaultProps = {
  classes: '',
};

export default AlignmentView;
