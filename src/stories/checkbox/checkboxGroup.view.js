import React, { useState } from 'react';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import CheckboxGroup from '../../components/Checkbox/CheckboxGroup.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import styles from './checkbox-view';
import Column from '../../components/Grid/Column/Column.component';

const g1 = 'checkbox-group-a';
const g2 = 'checkbox-group-b';

const groupAFieldsetProps = {
  label: 'Group A',
  tooltip: {
    title: 'Group A',
    body: 'This is a tooltip for group A',
  },
};

const groupBFieldsetProps = {
  label: 'Group B',
};
const CheckboxGroupView = () => {
  const [checkboxGroupA, updateCheckboxGroupA] = useState([]);
  const [checkboxGroupB, updateCheckboxGroupB] = useState([]);

  const handleGroupSelection = (selectedCheckboxes, group) => {
    if (group === g1) {
      updateCheckboxGroupA(selectedCheckboxes);
      if (selectedCheckboxes.length) {
        groupAFieldsetProps.validationMessage = 'Oops that doesn\'t seem right';
      } else {
        groupAFieldsetProps.validationMessage = null;
      }
    } else {
      updateCheckboxGroupB(selectedCheckboxes);
      if (selectedCheckboxes.length) {
        groupBFieldsetProps.validationMessage = 'Sorry, but selecting anything in this checkbox will trigger a validation message, for science!';
      } else {
        groupBFieldsetProps.validationMessage = null;
      }
    }
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="grid-view">
        <Container>
          <Row>
            <Column offset={2} col={10}>
              <CheckboxGroup
                fieldsetProps={groupAFieldsetProps}
                groupId={g1}
                colSize="6"
                handleChange={(selectedCheckboxes) => handleGroupSelection(selectedCheckboxes, g1)}
              >
                <Checkbox id="A-1" icon="check">A-1 check</Checkbox>
                <Checkbox id="A-2" icon="check">A-2 check</Checkbox>
                <Checkbox id="A-3" icon="check">A-3 check</Checkbox>
                <Checkbox id="A-4" icon="check">A-4 check</Checkbox>
                <Checkbox id="A-5" icon="check">A-5 check</Checkbox>
                <Checkbox id="A-6" icon="check">A-6 check</Checkbox>
              </CheckboxGroup>
            </Column>
          </Row>
          <Row>
            <Column offset={2} col={10}>
              <CheckboxGroup
                fieldsetProps={groupBFieldsetProps}
                groupId={g2}
                colSize="6"
                handleChange={(selectedCheckboxes) => handleGroupSelection(selectedCheckboxes, g2)}
              >
                <Checkbox id="B-1" icon="check">B-1 check</Checkbox>
                <Checkbox id="B-2" icon="check">B-2 check</Checkbox>
                <Checkbox id="B-3" icon="check">B-3 check</Checkbox>
                <Checkbox id="B-4" icon="check">B-4 check</Checkbox>
                <Checkbox id="B-5" icon="check">B-5 check</Checkbox>
                <Checkbox id="B-6" icon="check">B-6 check</Checkbox>
              </CheckboxGroup>
            </Column>
          </Row>

          <Row>
            <Column offset={2} col={10}>
              <div className="w-full results-container">
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
            </Column>
          </Row>

        </Container>
      </div>
    </>
  );
};

export default CheckboxGroupView;
