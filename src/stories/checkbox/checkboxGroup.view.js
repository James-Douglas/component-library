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

  return (
    <>
      <style jsx>{styles}</style>
      <div className="grid-view">
        <Container>
          <CheckboxGroup groupId={g1} colSize="6" handleChange={(selectedCheckboxes) => updateCheckboxGroupA(selectedCheckboxes)}>
            <Checkbox id="A-1" icon="check">A-1 check</Checkbox>
            <Checkbox id="A-2" icon="check">A-2 check</Checkbox>
            <Checkbox id="A-3" icon="check">A-3 check</Checkbox>
            <Checkbox id="A-4" icon="check">A-4 check</Checkbox>
            <Checkbox id="A-5" icon="check">A-5 check</Checkbox>
            <Checkbox id="A-6" icon="check">A-6 check</Checkbox>
          </CheckboxGroup>
          <CheckboxGroup groupId={g2} colSize="6" handleChange={(selectedCheckboxes) => updateCheckboxGroupB(selectedCheckboxes)}>
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
                    {checkboxGroupA.map((checkbox) => checkbox.id).join(', ')}
                  </p>
                  <p className="results">
                    {g2}
              :
                    {' '}
                    {checkboxGroupB.map((checkbox) => checkbox.id).join(', ')}
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
