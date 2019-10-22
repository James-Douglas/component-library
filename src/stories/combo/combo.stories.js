import React from 'react';
import { storiesOf } from '@storybook/react';

import iconReadme from '../../components/Dropdown/dropdown.md';
import Combo from '../../components/Combo/Combo.component';
import fakeApiData from './jsonPlaceholder';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';

const apiData = fakeApiData.map((obj) => obj.title);


const renderLimit = 2;
storiesOf('Combo', module)
  .add('Default Combo', () => (
    <div className="mt-54 w-full">
      <Container>
        <Row className="row-view">
          <Column className="col-view" />
          <Column className="col-view" col="10">
            <Combo
              label="First Combo label"
              apiData={apiData}
              id="combo-id-first"
              linkHref="https://www.comparethemarket.com.au/"
              linkText="Can’t find your address?"
              required={false}
              tooltip={{ title: 'Combo component' }}
            />
          </Column>
        </Row>
      </Container>
    </div>
  ), { notes: iconReadme })
  .add('Default2 Combo', () => (
    <div className="mt-54 w-full">
      <Container>
        <Row className="row-view">
          <Column className="col-view" />
          <Column className="col-view" col="10">
            <Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" bordered prefixContent="$" suffixContent="dol" disabled renderLimit={renderLimit} />
          </Column>
        </Row>
      </Container>
    </div>
  ), { notes: iconReadme });