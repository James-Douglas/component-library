import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const PreCheckedToggleView = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (id, value, group) => {
    // eslint-disable-next-line no-console
    console.log(`${group} group toggle selected, id: ${id}, value: ${value} `);
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup label="Pre-checked" id="toggleGroupG" name="toggleGroupF" tooltip={tooltip} onToggle={({ id, value }) => handleChange(id, value, 'PRE-CHECKED')}>
          <Toggle value="d" id="d" label="D" autofill />
          <Toggle value="e" id="e" label="E" />
          <Toggle value="f" id="f" label="F" />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default PreCheckedToggleView;
