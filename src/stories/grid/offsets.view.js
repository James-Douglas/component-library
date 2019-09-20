import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import './grid-view.css';

const ResponsiveView = () => (
  <div className="grid-view">
    <Container>
      <Row classes="row-view">
        <h1>Column offsets</h1>
      </Row>
      <div className="background-wrap">
        <Row classes="row-view">
          <Column classes="col-view" col="4" offset="4">col=&apos;4&apos; offset=&apos;4&apos;</Column>
        </Row>
        <Row classes="row-view">
          <Column classes="col-view" col="3" offset="2">col=&apos;3&apos; offset=&apos;2&apos;</Column>
          <Column classes="col-view" col="3" offset="2">col=&apos;3&apos; offset=&apos;2&apos;</Column>
        </Row>
        <Row classes="row-view">
          <Column classes="col-view" col="1">col=&apos;1&apos;</Column>
          <Column classes="col-view" col="1" offset="1">col=&apos;1&apos; offset=&apos;1&apos;</Column>
          <Column classes="col-view" col="1" offset="1">col=&apos;1&apos; offset=&apos;1&apos;</Column>
          <Column classes="col-view" col="1" offset="1">col=&apos;1&apos; offset=&apos;1&apos;</Column>
          <Column classes="col-view" col="1" offset="1">col=&apos;1&apos; offset=&apos;1&apos;</Column>
          <Column classes="col-view" col="1" offset="1">col=&apos;1&apos; offset=&apos;1&apos;</Column>
        </Row>
      </div>
    </Container>
  </div>
);

Column.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

Column.defaultProps = {
  classes: '',
  children: [],
};

export default ResponsiveView;
