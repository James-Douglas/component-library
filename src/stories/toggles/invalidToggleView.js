import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const InvalidToggleView = () => {
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
        <ToggleGroup label="Invalid (required)" name="invalid" id="toggleGroupH" tooltip={tooltip} onToggle={({ id, value }) => handleChange(id, value, 'INVALID')}>
          <Toggle value="health" id="health" label="Health " invalid />
          <Toggle value="car" id="car" label="Car" invalid />
          <Toggle value="energy" id="energy" label="Energy" invalid />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default InvalidToggleView;
