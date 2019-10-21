import React, { useState } from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const ToggleView = () => {
  const [selectedValue, setSelectedValue] = useState('1');

  const tooltip = {
    title: 'test',
  };

  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`toggle selected: ${value} `);
    setSelectedValue(value);
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup label="Default" name="toggleGroupA" tooltip={tooltip} onToggle={handleChange} selectedValue={selectedValue}>
          <Toggle value="1" id="one" label="one" />
          <Toggle value="2" id="two" label="two" />
          <Toggle value="3" id="three" label="three" />
          <Toggle value="4" id="four" label="four" />
          <Toggle value="5" id="five" label="five" />
          <Toggle value="6" id="six" label="six" />
          <Toggle value="7" id="seven" label="seven" />
          <Toggle value="8" id="eight" label="eight" />
          <Toggle value="9" id="nine" label="nine" />
          <Toggle value="10" id="ten" label="ten" />
          <Toggle value="11" id="eleven" label="eleven" />
          <Toggle value="12" id="twelve" label="twelve" />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default ToggleView;
