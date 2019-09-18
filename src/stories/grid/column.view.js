import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import styles from './column.module.css';

const ColumnView = () => (
  <div className={`${styles['grid-view']}`}>
    <Container>
      <Row>
        <h1>Auto-layout columns</h1>
      </Row>
      <Row>
        {/* eslint-disable-next-line max-len */}
        <p>For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
      </Row>
      <div className="background-wrap">
        <Row>
          <Column>1 of 2</Column>
          <Column>2 of 2</Column>
        </Row>
        <Row>
          <Column>1 of 3</Column>
          <Column>2 of 3</Column>
          <Column>3 of 3</Column>
        </Row>
        <Row>
          <h1>Setting one column width</h1>
        </Row>
        <Row>
          {/* eslint-disable-next-line max-len */}
          <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.  Note that the other columns will resize no matter the width of the center column.</p>
        </Row>
        <Row>
          <Column>1 of 3</Column>
          <Column col="6">2 of 3 (wider col=&apos;6&apos;)</Column>
          <Column>3 of 3</Column>
        </Row>
        <Row>
          <h1>Variable width content</h1>
        </Row>
        <Row>
          {/* eslint-disable-next-line max-len */}
          <p>Use [breakpoint]==&apos;auto=&apos; props to size columns based on the natural width of their content.</p>
        </Row>
        <Row classes="justify-center">
          <Column>col</Column>
          <Column md="auto">Variable width content (md=&apos;auto&apos;) some more text to increase width</Column>
          <Column>col</Column>
        </Row>
      </div>
    </Container>
  </div>
);

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}

Column.defaultProps = {
  children: [],
};

export default ColumnView;
