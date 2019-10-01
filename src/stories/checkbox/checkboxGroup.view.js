import React, { useState } from 'react';
import Container from '../../components/Grid/Container/Container.component';
import CheckboxGroup from '../../components/Checkbox/CheckboxGroup.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import './checkbox-view.css';

const g1 = 'checkbox-group-a';
const g2 = 'checkbox-group-b';

const CheckboxGroupView = () => {
  const [checkboxGroupA, updateCheckboxGroupA] = useState([]);
  const [checkboxGroupB, updateCheckboxGroupB] = useState([]);

  const handleGroupAClick = (e) => {
    console.log("Global Callback Called")
  };

  const handleGroupBClick = (e) => {
    console.log(e)
  };


  return (
    <div className="grid-view">
      <Container>
        <CheckboxGroup groupId={g1} colSize="6" handleClick={handleGroupAClick} handleKeyUp={handleGroupAClick}>
          <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
          <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
          <Checkbox id="A-3" icon="check"><p>A-3 check</p></Checkbox>
          <Checkbox id="A-4" icon="check"><p>A-4 check</p></Checkbox>
          <Checkbox id="A-5" icon="check"><p>A-5 check</p></Checkbox>
          <Checkbox id="A-6" icon="check"><p>A-6 check</p></Checkbox>
        </CheckboxGroup>
        <CheckboxGroup groupId={g2} colSize="6" handleClick={handleGroupBClick} handleKeyUp={handleGroupBClick}>
          <Checkbox id="B-1" icon="check"><p>B-1 check</p></Checkbox>
          <Checkbox id="B-2" icon="check"><p>B-2 check</p></Checkbox>
          <Checkbox id="B-3" icon="check"><p>B-3 check</p></Checkbox>
          <Checkbox id="B-4" icon="check"><p>B-4 check</p></Checkbox>
          <Checkbox id="B-5" icon="check"><p>B-5 check</p></Checkbox>
          <Checkbox id="B-6" icon="check"><p>B-6 check</p></Checkbox>
        </CheckboxGroup>

        <div className="results-container">
          {checkboxGroupA.length || checkboxGroupB.length
            ? (
              <>
                <p className="results">
                  {g1}
              :
                
                  {checkboxGroupA.join(', ')}
                </p>
                <p className="results">
                  {g2}
              :
                
                  {checkboxGroupB.join(', ')}
                </p>
              </>
            )
            : <p className="results">Nothing selected</p>}
        </div>

      </Container>
    </div>
  );
};

export default CheckboxGroupView;
