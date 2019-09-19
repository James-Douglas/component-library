import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import './grid-view.css';

const ResponsiveView = ({ classes }) => (
  <div className={`grid-view ${classes}`}>
    <Container>
      <Row classes='row-view'>
        <h1>Responsive columns</h1>
      </Row>
      <Row classes='row-view'>
        {/* eslint-disable-next-line max-len */}
        <p>For grids that are the same from the smallest of devices to the largest, use the col=[value]. Specify a numbered class when you need a particularly sized column; otherwise, feel free to omit all props (auto calculation).</p>
      </Row>
      <div className='background-wrap'>
        <Row classes='row-view'>
          <Column classes='col-view'>col</Column>
          <Column classes='col-view'>col</Column>
          <Column classes='col-view'>col</Column>
          <Column classes='col-view'>col</Column>
        </Row>
        <Row classes='row-view'>
          <Column classes='col-view'>col=&apos;8&apos;</Column>
          <Column classes='col-view' col='4'>col=&apos;4&apos;</Column>
        </Row>
        <Row classes='row-view'>
          <h1>Stacked to horizontal</h1>
        </Row>
        <Row classes='row-view'>
          {/* eslint-disable-next-line max-len */}
          <p>Using a single set of col=sm or sm=[value] props, you can create a basic grid system that starts out stacked before becoming horizontal with at the small breakpoint (sm).</p>
        </Row>
        <Row classes='row-view'>
          <Column classes='col-view' sm='8'>sm=&apos;8&apos;</Column>
          <Column classes='col-view' sm='4'>sm=&apos;4&apos;</Column>
        </Row>
        <Row classes='row-view'>
          <Column classes='col-view' col='sm'>col=&apos;sm&apos;</Column>
          <Column classes='col-view' col='sm'>col=&apos;sm&apos;</Column>
          <Column classes='col-view' col='sm'>col=&apos;sm&apos;</Column>
        </Row>
        <Row classes='row-view'>
          <h1>Mix and match</h1>
        </Row>
        <Row classes='row-view'>
          {/* eslint-disable-next-line max-len */}
          <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
        </Row>
        <Row classes='row-view'>
          <Column classes='col-view' sm='4' lg='2'>sm=&apos;4&apos; lg=&apos;2&apos;</Column>
          <Column classes='col-view' sm='4' lg='2'>sm=&apos;4&apos; lg=&apos;2&apos;</Column>
          <Column classes='col-view' sm='4' lg='8'>sm=&apos;4&apos; lg=&apos;8&apos;</Column>
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
