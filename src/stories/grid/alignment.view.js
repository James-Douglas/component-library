import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import './grid-view.css';

const AlignmentView = ({ classes }) => (
  <div className={`grid-view ${classes}`}>
    <Container>
      <Row classes='row-view'>
        <h1>Row horizontal alignment</h1>
      </Row>
      <Row classes='row-view'>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
      </Row>
      <Row classes='row-view justify-center'>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
      </Row>
      <Row classes='row-view justify-end'>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
      </Row>
      <Row classes='row-view justify-around'>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
      </Row>
      <Row classes='row-view justify-between'>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
        <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
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
