import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const RectOptionsToggleView = () => {
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
        <ToggleGroup
          label="Rectangle with columns & height"
          name="toggleGroupE"
          tooltip={tooltip}
          onToggle={({ id, value }) => handleChange(id, value, 'RECT_COLS_HEIGHT')}
          rectOptions={{
            col: 4,
            height: 12,
            align: 'center',
          }}
        >
          <Toggle value="x1" id="long4" label="Comprehensive" />
          <Toggle value="x3" id="long5" label="Third Party Property Damage" />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default RectOptionsToggleView;
