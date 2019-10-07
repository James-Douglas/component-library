import React from 'react';
import css from 'styled-jsx/css';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import ColorToggle from '../../components/Toggles/Color/ColorToggle.component';
import StoryTemplate from '../storyTemplate';


const styles = css`
 
`;

const ColorToggleView = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (id, group) => {
    // eslint-disable-next-line no-console
    console.log(`TOGGLE SELECTED: ${id} `);
  };

  return (
    <StoryTemplate background="grey">
      <div className="mb-32">
        <style jsx>{styles}</style>
        <ToggleGroup label="Default" name="toggleGroupA" tooltip={tooltip} handleChange={(id) => handleChange(id)}>
          <ColorToggle backgroundColor="pink" id="pink" fontColor="white" />
          <ColorToggle backgroundColor="white" id="white" />
          <ColorToggle backgroundColor="silver" id="silver" />
          <ColorToggle backgroundColor="black" fontColor="white" id="black" />
          <ColorToggle backgroundColor="gray" id="gray" />
          <ColorToggle backgroundColor="blue" fontColor="white" id="blue" />
          <ColorToggle backgroundColor="green" fontColor="white" id="green" />
          <ColorToggle backgroundColor="gold" id="gold" />
          <ColorToggle backgroundColor="maroon" fontColor="white" id="maroon" />
          <ColorToggle backgroundColor="red" fontColor="white" id="red" />
          <ColorToggle backgroundColor="orange" fontColor="white" id="orange" />
          <ColorToggle backgroundColor="brown" fontColor="white" id="brown" />
          <ColorToggle backgroundColor="purple" fontColor="white" id="purple" />
          <ColorToggle backgroundColor="yellow" id="yellow" />
          <ColorToggle backgroundColor="turquoise" id="turquoise" />
          <ColorToggle backgroundColor="beige" id="beige" />
        </ToggleGroup>
      </div>

    </StoryTemplate>
  );
};

export default ColorToggleView;
