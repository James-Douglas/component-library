import React from 'react';
import { storiesOf } from '@storybook/react';
import iconReadme from '../../components/Dropdown/dropdown.md';
import Combo from '../../components/Combo/Combo.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import fakeApiData from './jsonPlaceholder';

const apiData = fakeApiData.map((obj) => obj.title);

const renderLimit = 2;

storiesOf('Combo', module)
  .add('Default Combo', () => (

    <Combo label="First Combo label" apiData={apiData} id="combo-id-first" />
  ), { notes: iconReadme })
  .add('Default2 Combo', () => (
    <Container>
      <Row className="row-view">
        <Column className="col-view" col="3"><Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" bordered prefixContent="$" suffixContent="dol" disabled renderLimit={renderLimit} /></Column>
      </Row>

    </Container>
  ), { notes: iconReadme })
  .add('Default3 Combo', () => (
    <Container>
      <Row className="row-view">
        <Column className="col-view" col="3"><Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" prefillValue autocomplete="off" required renderLimit={renderLimit} /></Column>
      </Row>

    </Container>
  ), { notes: iconReadme });
