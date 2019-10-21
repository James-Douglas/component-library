import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const RectOptionsToggleView = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`toggle selected: ${value} `);
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup
          label="Rectangle with columns & height"
          name="toggleGroupE"
          tooltip={tooltip}
          onToggle={handleChange}
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
