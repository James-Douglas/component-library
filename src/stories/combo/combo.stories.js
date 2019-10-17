import React from 'react';
import { storiesOf } from '@storybook/react';

import iconReadme from '../../components/Dropdown/dropdown.md';
import Combo from '../../components/Combo/Combo.component';
import fakeApiData from './jsonPlaceholder';

const apiData = fakeApiData.map((obj) => obj.title);

const changeStatus = () => {
  alert('234');
  return comboVisible = !comboVisible;
}

const renderLimit = 2;
let comboVisible = true;
storiesOf('Combo', module)
  .add('Default Combo', () => (
    <div>
    {comboVisible &&
    <Combo label="First Combo label" apiData={apiData} id="combo-id-first">
      <a id="combo-link" onClick={changeStatus}>Can’t find your address? <span className="highlight svelte-17l10or">Please Enter Manually</span></a>
    </Combo>
    }
      {!comboVisible &&
        <div>dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf</div>
      }
  </div>
  ), { notes: iconReadme })
  .add('Default2 Combo', () => (
    <Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" bordered prefixContent="$" suffixContent="dol" disabled renderLimit={renderLimit} />
  ), { notes: iconReadme })
  .add('Default3 Combo', () => (
    <Combo label="Second Combo label" id="combo-id-second" placeholder="placeholder" prefillValue="prefillValue" autocomplete="off" required renderLimit={renderLimit} />
  ), { notes: iconReadme });
