import React from 'react';
import { storiesOf } from '@storybook/react';

import iconReadme from '../../components/Dropdown/dropdown.md';
import Combo from '../../components/Combo/Combo.component';
import fakeApiData from './jsonPlaceholder';

const apiData = fakeApiData.map((obj) => obj.title);


const renderLimit = 2;
storiesOf('Combo', module)
  .add('Default Combo', () => (
    <Combo label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} />
  ), { notes: iconReadme })
  .add('Default2 Combo', () => (
    <Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" bordered prefixContent="$" suffixContent="dol" disabled renderLimit={renderLimit} />
  ), { notes: iconReadme })
  .add('Default3 Combo', () => (
    <Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" prefillValue="prefillValue" autocomplete="off" required renderLimit={renderLimit} />
  ), { notes: iconReadme });
