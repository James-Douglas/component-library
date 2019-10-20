import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const PreselectedToggle = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`$toggle selected: ${value} `);
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup label="Pre-selected" id="toggleGroupG" name="toggleGroupF" tooltip={tooltip} onToggle={handleChange} selectedValue="d">
          <Toggle value="d" id="d" label="D" />
          <Toggle value="e" id="e" label="E" />
          <Toggle value="f" id="f" label="F" />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default PreselectedToggle;
