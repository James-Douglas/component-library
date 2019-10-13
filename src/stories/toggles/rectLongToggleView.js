import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const RectLongToggleView = () => {
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
        <ToggleGroup label="Long" name="toggleGroupD" tooltip={tooltip} onToggle={({ id, value }) => handleChange(id, value, 'LONG')}>
          <Toggle value="x1" id="long1" label="S-type 3.0mpi x200 Automatic 5gr (rel.Mar)rwd, 179kW" />
          <Toggle value="x2" id="long2" label="S-type SE 3.0mpi x200 Automatic 5gr (rel.Mar)rwd, 179kW" />
          <Toggle value="x3" id="long3" label="S-type SE 4.0mpi x200 Automatic 5gr (rel.Mar)rwd, 209kW" />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default RectLongToggleView;
