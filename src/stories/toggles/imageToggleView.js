import React from 'react';

import ToggleGroup from '../../components/Toggles/ToggleGroup.component';
import Toggle from '../../components/Toggles/Toggle.component';
import StoryTemplate from '../storyTemplate';

import AUDI from '../../../assets/images/car-makes/AUDI.png';
import BMW from '../../../assets/images/car-makes/BMW.png';
import FORD from '../../../assets/images/car-makes/FORD.png';
import HOLD from '../../../assets/images/car-makes/HOLD.png';
import HOND from '../../../assets/images/car-makes/HOND.png';
import HYUN from '../../../assets/images/car-makes/HYUN.png';
import ISUZ from '../../../assets/images/car-makes/ISUZ.png';
import JEEP from '../../../assets/images/car-makes/JEEP.png';
import KIA from '../../../assets/images/car-makes/KIA.png';
import LAND from '../../../assets/images/car-makes/LAND.png';
import MAZD from '../../../assets/images/car-makes/MAZD.png';
import MERC from '../../../assets/images/car-makes/MERC.png';
import MITS from '../../../assets/images/car-makes/MITS.png';
import NISS from '../../../assets/images/car-makes/NISS.png';
import SUBA from '../../../assets/images/car-makes/SUBA.png';
import SUZU from '../../../assets/images/car-makes/SUZU.png';
import TOYO from '../../../assets/images/car-makes/TOYO.png';
import VOLK from '../../../assets/images/car-makes/VOLK.png';

const names = [
  'Audi',
  'BWM',
  'Ford',
  'Holden',
  'Honda',
  'Hyundai',
  'Isuzu',
  'Jeep',
  'Kia',
  'Land Rover',
  'Mazda',
  'Mercedes',
  'Mitsubishi',
  'Nissan',
  'Subaru',
  'Suzuki',
  'Toyota',
  'Volkswagen',
];

const makes = [
  AUDI,
  BMW,
  FORD,
  HOLD,
  HOND,
  HYUN,
  ISUZ,
  JEEP,
  KIA,
  LAND,
  MAZD,
  MERC,
  MITS,
  NISS,
  SUBA,
  SUZU,
  TOYO,
  VOLK,
];


const ImageToggleView = () => {
  const tooltip = {
    title: 'test',
  };

  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`group toggle selected: ${value} `);
  };

  return (
    <StoryTemplate>
      <div className="mb-32">
        <ToggleGroup label="Images" name="toggleGroupC" tooltip={tooltip} onToggle={handleChange}>
          {makes.map((make, i) => (
            <Toggle value={i} id={names[i]} key={`toggle-${names[i]}`} label={names[i]} pictureOptions={{ src: make, alt: `${names[i]} logo`, title: names[i] }} />
          ))}
        </ToggleGroup>
      </div>
    </StoryTemplate>
  );
};

export default ImageToggleView;
