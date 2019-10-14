import React from 'react';
import { storiesOf } from '@storybook/react';
import iconReadme from '../../components/Dropdown/dropdown.md';
import Combo from '../../components/Combo/Combo.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';

storiesOf('Combo', module)
  .add('Default Combo', () => (
    <Combo />
  ), { notes: iconReadme })
  .add('Default2 Combo', () => (
    <Container>
      <Row className="row-view">
        <Column className="col-view" col="3"><Combo /></Column>
      </Row>

    </Container>
  ), { notes: iconReadme });
