import React, { useState } from 'react';
import Container from '../../components/Grid/Container/Container.component';
import CheckboxGroup from '../../components/Checkbox/CheckboxGroup.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import styles from './checkbox-view';

const g1 = 'checkbox-group-a';
const g2 = 'checkbox-group-b';

const CheckboxGroupView = () => {
  const [checkboxGroupA, updateCheckboxGroupA] = useState([]);
  const [checkboxGroupB, updateCheckboxGroupB] = useState([]);

  const clickedItems = (arr, checkboxID) => {
    if (arr.includes(checkboxID)) {
      return arr.filter((item) => item !== checkboxID);
    }
    return [...arr, checkboxID];
  };

  const logEvent = (e) => {
    const currentGroup = e.currentTarget.closest('.checkbox-group').id;
    const checkboxID = e.target.getAttribute('for') || e.target.id;

    if (e.key === ' ' || e.key === undefined) {
      if (currentGroup === g1) {
        updateCheckboxGroupA(clickedItems(checkboxGroupA, checkboxID));
      } else if (currentGroup === g2) {
        updateCheckboxGroupB(clickedItems(checkboxGroupB, checkboxID));
      }
    }
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="grid-view manor-rich-text">
        <Container>
          <CheckboxGroup groupId={g1} colSize="6" handleClick={logEvent} handleKeyUp={logEvent}>
            <Checkbox id="A-1" icon="check">A-1 check</Checkbox>
            <Checkbox id="A-2" icon="check">A-2 check</Checkbox>
            <Checkbox id="A-3" icon="check">A-3 check</Checkbox>
            <Checkbox id="A-4" icon="check">A-4 check</Checkbox>
            <Checkbox id="A-5" icon="check">A-5 check</Checkbox>
            <Checkbox id="A-6" icon="check">A-6 check</Checkbox>
          </CheckboxGroup>
          <CheckboxGroup groupId={g2} colSize="6" handleClick={logEvent} handleKeyUp={logEvent}>
            <Checkbox id="B-1" icon="check">B-1 check</Checkbox>
            <Checkbox id="B-2" icon="check">B-2 check</Checkbox>
            <Checkbox id="B-3" icon="check">B-3 check</Checkbox>
            <Checkbox id="B-4" icon="check">B-4 check</Checkbox>
            <Checkbox id="B-5" icon="check">B-5 check</Checkbox>
            <Checkbox id="B-6" icon="check">B-6 check</Checkbox>
          </CheckboxGroup>

          <div className="results-container">
            {checkboxGroupA.length || checkboxGroupB.length
              ? (
                <>
                  <p className="results">
                    {g1}
              :
                    {' '}
                    {checkboxGroupA.join(', ')}
                  </p>
                  <p className="results">
                    {g2}
              :
                    {' '}
                    {checkboxGroupB.join(', ')}
                  </p>
                </>
              )
              : <p className="results">Nothing selected</p>}
          </div>

        </Container>
      </div>
    </>
  );
};

export default CheckboxGroupView;
