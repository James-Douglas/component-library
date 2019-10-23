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

  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`TOGGLE SELECTED: ${value} `);
  };

  return (
    <StoryTemplate background="grey">
      <div className="mb-32">
        <style jsx>{styles}</style>
        <ToggleGroup label="Default" name="toggleGroupA" tooltip={tooltip} onToggle={handleChange}>
          <ColorToggle backgroundColor="pink" value="pink" id="pink" fontColor="white" />
          <ColorToggle backgroundColor="white" value="white" id="white" />
          <ColorToggle backgroundColor="silver" value="silver" id="silver" />
          <ColorToggle backgroundColor="black" value="black" fontColor="white" id="black" />
          <ColorToggle backgroundColor="gray" value="gray" id="gray" />
          <ColorToggle backgroundColor="blue" value="blue" fontColor="white" id="blue" />
          <ColorToggle backgroundColor="green" value="green" fontColor="white" id="green" />
          <ColorToggle backgroundColor="gold" value="gold" id="gold" />
          <ColorToggle backgroundColor="maroon" value="maroon" fontColor="white" id="maroon" />
          <ColorToggle backgroundColor="red" value="red" fontColor="white" id="red" />
          <ColorToggle backgroundColor="orange" value="orange" fontColor="white" id="orange" />
          <ColorToggle backgroundColor="brown" value="brown" fontColor="white" id="brown" />
          <ColorToggle backgroundColor="purple" value="purple" fontColor="white" id="purple" />
          <ColorToggle backgroundColor="yellow" value="yellow" id="yellow" />
          <ColorToggle backgroundColor="turquoise" value="turquoise" id="turquoise" />
          <ColorToggle backgroundColor="beige" value="beige" id="beige" />
        </ToggleGroup>
      </div>

    </StoryTemplate>
  );
};

export default ColorToggleView;
