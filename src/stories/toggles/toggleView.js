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
        <ToggleGroup label="Default" name="toggleGroupA" tooltip={tooltip} handleChange={(id) => handleChange(id, 'DEFAULT')}>
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
        <ToggleGroup label="Icons" name="toggleGroupB" tooltip={tooltip} handleChange={(id) => handleChange(id, 'ICONS')}>
          <Toggle value="contact" id="contact" label="Contact" icon="contact" iconSize={4} />
          <Toggle value="close" id="close" label="Close" icon="close" iconSize={4} />
          <Toggle value="info" id="info" label="Info" icon="info" iconSize={4} />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup label="Images" name="toggleGroupC" tooltip={tooltip} handleChange={(id) => handleChange(id, 'IMAGES')}>
          {makes.map((make, i) => (
            <Toggle value={i} id={names[i]} key={`toggle-${names[i]}`} label={names[i]} pictureOptions={{ src: make, alt: `${names[i]} logo`, title: names[i] }} />
          ))}
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup label="Long" name="toggleGroupD" tooltip={tooltip} handleChange={(id) => handleChange(id, 'LONG')}>
          <Toggle value="x1" id="long1" label="S-type 3.0mpi x200 Automatic 5gr (rel.Mar)rwd, 179kW" />
          <Toggle value="x2" id="long2" label="S-type SE 3.0mpi x200 Automatic 5gr (rel.Mar)rwd, 179kW" />
          <Toggle value="x3" id="long3" label="S-type SE 4.0mpi x200 Automatic 5gr (rel.Mar)rwd, 209kW" />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup
          label="Rectangle with columns & height"
          name="toggleGroupE"
          tooltip={tooltip}
          handleChange={(id) => handleChange(id, 'RECT_COLUMNS_HEIGHT')}
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
        <ToggleGroup label="Inactive" id="toggleGroupF" name="toggleGroupE" tooltip={tooltip} handleChange={(id) => handleChange(id, 'INACTIVE')}>
          <Toggle value="a" id="a" label="A" disabled />
          <Toggle value="b" id="b" label="B" disabled />
          <Toggle value="c" id="c" label="C" disabled />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup label="Pre-checked" id="toggleGroupG" name="toggleGroupF" tooltip={tooltip} handleChange={(id) => handleChange(id, 'PRE-CHECKED')}>
          <Toggle value="d" id="d" label="D" autofill />
          <Toggle value="e" id="e" label="E" />
          <Toggle value="f" id="f" label="F" />
        </ToggleGroup>
      </div>

      <div className="mb-32">
        <ToggleGroup label="Invalid (required)" name="invalid" id="toggleGroupH" tooltip={tooltip} handleChange={(id) => handleChange(id, 'INVALID')}>
          <Toggle value="health" id="health" label="Health " invalid />
          <Toggle value="car" id="car" label="Car" invalid />
          <Toggle value="energy" id="energy" label="Energy" invalid />
        </ToggleGroup>
      </div>

    </StoryTemplate>
  );
};

export default ToggleView;
