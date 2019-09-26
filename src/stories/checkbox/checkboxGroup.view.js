import React, { useState } from 'react';
import Container from '../../components/Grid/Container/Container.component';
import CheckboxGroup from '../../components/Checkbox/CheckboxGroup.component';
import './checkbox-view.css';

const g1 = 'checkbox-group-a';
const g2 = 'checkbox-group-b';

const checkboxesA = [
  { id: 'A-1', icon: 'check', content: 'A-1 check' },
  { id: 'A-2', icon: 'check', content: 'A-2 check' },
  { id: 'A-3', icon: 'check', content: 'A-3 check' },
  { id: 'A-4', icon: 'check', content: 'A-4 check' },
  { id: 'A-5', icon: 'check', content: 'A-5 check' },
  { id: 'A-6', icon: 'check', content: 'A-6 check', disabled: true },
];

const checkboxesB = [
  { id: 'B-1', icon: 'check', content: 'B-1 check' },
  { id: 'B-2', icon: 'check', content: 'B-2 check' },
  { id: 'B-3', icon: 'check', content: 'B-3 check' },
  { id: 'B-4', icon: 'check', content: 'B-4 check' },
  { id: 'B-5', icon: 'check', content: 'B-5 check' },
  { id: 'B-6', icon: 'check', content: 'B-6 check' },
];

const CheckboxGroupView = () => {
  const [checkboxGroupA, updateCheckboxGroupA] = useState([]);
  const [checkboxGroupB, updateCheckboxGroupB] = useState([]);

  const clickedItems = (arr, checkbox) => {
    if (arr.includes(checkbox)) {
      return arr.filter((item) => item !== checkbox);
    }
    return [...arr, checkbox];
  };

  const logClick = (e) => {
    const currentGroup = e.currentTarget.closest('.checkbox-group').id;
    const checkbox = e.currentTarget.getAttribute('for');

    if (currentGroup === g1) {
      updateCheckboxGroupA(clickedItems(checkboxGroupA, checkbox));
    } else if (currentGroup === g2) {
      updateCheckboxGroupB(clickedItems(checkboxGroupB, checkbox));
    }
  };


  return (
    <div className="grid-view ">
      <Container>
        <CheckboxGroup groupId={g1} checkboxesArr={checkboxesA} colSize="6" handleClick={logClick} />
        <CheckboxGroup groupId={g2} checkboxesArr={checkboxesB} colSize="6" handleClick={logClick} />

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
  );
};

export default CheckboxGroupView;
