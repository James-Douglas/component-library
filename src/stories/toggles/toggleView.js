import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

const ToggleView = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (id, group) => {
    // eslint-disable-next-line no-console
    console.log(`${group} group toggle selected, id: ${id} `);
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup label="Default" name="toggleGroupA" tooltip={tooltip} handleChange={(id) => handleChange(id, 'Default')}>
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

      <div className="mb-32">
        <ToggleGroup label="Icons" name="toggleGroupB" tooltip={tooltip} handleChange={(id) => handleChange(id, 'Default')}>
          <Toggle value="contact" id="contact" label="Contact" icon="contact" iconSize={4} />
          <Toggle value="close" id="close" label="Close" icon="close" iconSize={4} />
          <Toggle value="info" id="info" label="Info" icon="info" iconSize={4} />

        </ToggleGroup>
      </div>


      <div className="mb-32">
        <ToggleGroup label="Long" name="toggleGroupC" tooltip={tooltip} handleChange={(id) => handleChange(id, 'Invalid')}>
          <Toggle value="x1" id="long1" label="S-type 3.0mpi x200 Automatic 5gr (rel.Mar)rwd, 179kW" />
          <Toggle value="x2" id="long2" label="S-type SE 3.0mpi x200 Automatic 5gr (rel.Mar)rwd, 179kW" />
          <Toggle value="x3" id="long3" label="S-type SE 4.0mpi x200 Automatic 5gr (rel.Mar)rwd, 209kW" />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup
          label="Rectangle with columns & height"
          name="toggleGroupD"
          tooltip={tooltip}
          handleChange={(id) => handleChange(id, 'Invalid')}
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


      <div className="mb-32">
        <ToggleGroup label="Inactive" id="toggleGroupE" name="toggleGroupE" tooltip={tooltip} handleChange={(id) => handleChange(id, 'Inactive')}>
          <Toggle value="a" id="a" label="A" disabled />
          <Toggle value="b" id="b" label="B" disabled />
          <Toggle value="c" id="c" label="C" disabled />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup label="Pre-checked" id="toggleGroupF" name="toggleGroupF" tooltip={tooltip} handleChange={(id) => handleChange(id, 'Pre-checked')}>
          <Toggle value="d" id="d" label="D" autofill />
          <Toggle value="e" id="e" label="E" />
          <Toggle value="f" id="f" label="F" />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup label="Invalid (required)" name="invalid" id="toggleGroupG" tooltip={tooltip} handleChange={(id) => handleChange(id, 'Invalid')}>
          <Toggle value="health" id="health" label="Health " invalid />
          <Toggle value="car" id="car" label="Car" invalid />
          <Toggle value="energy" id="energy" label="Energy" invalid />
        </ToggleGroup>
      </div>

    </StoryTemplate>
  );
};

export default ToggleView;
