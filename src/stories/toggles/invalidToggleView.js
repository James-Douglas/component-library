import React, { useState } from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const InvalidToggleView = () => {
  const [validationMessage, setValidationMessage] = useState('Sorry, Car is not available');
  const tooltip = {
    title: 'test',
  };

  const handleChange = (id, value, group) => {
    // eslint-disable-next-line no-console
    console.log(`${group} group toggle selected, id: ${id}, value: ${value} `);
    if (id === 'car') {
      setValidationMessage('Sorry, Car is not available');
    } else {
      setValidationMessage('');
    }
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup label="Invalid (required)" name="invalid" selectedId="car" validationMessage={validationMessage} id="toggleGroupH" tooltip={tooltip} onToggle={({ id, value }) => handleChange(id, value, 'INVALID')}>
          <Toggle value="health" id="health" label="Health " invalid />
          <Toggle value="car" id="car" label="Car" invalid />
          <Toggle value="energy" id="energy" label="Energy" invalid />
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default InvalidToggleView;
