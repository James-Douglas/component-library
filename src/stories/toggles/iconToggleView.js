import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const IconToggleView = () => {
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
        <ToggleGroup label="Icons" name="toggleGroupB" tooltip={tooltip} onToggle={({ id, value }) => handleChange(id, value, 'ICONS')}>
          <Toggle value="contact" id="contact" label="Contact" icon="contact" iconSize={4} />
          <Toggle value="close" id="close" label="Close" icon="close" iconSize={4} />
          <Toggle value="info" id="info" label="Info" icon="info" iconSize={4} />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default IconToggleView;
