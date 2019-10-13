import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const InactiveToggleView = () => {
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
        <ToggleGroup label="Inactive" id="toggleGroupF" name="toggleGroupE" tooltip={tooltip} onToggle={({ id, value }) => handleChange(id, value, 'INACTIVE')}>
          <Toggle value="a" id="a" label="A" disabled />
          <Toggle value="b" id="b" label="B" disabled />
          <Toggle value="c" id="c" label="C" disabled />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default InactiveToggleView;
