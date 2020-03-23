import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import CheckboxGroup from '../../components/Checkbox/CheckboxGroup.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Column from '../../components/Grid/Column/Column.component';

const StyledGridView = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  line-height: ${(props) => props.theme.lineHeight.relaxed};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledResults = styled.div`
  min-height: 120px;
  width: 100%;
  background: #0b60b7;
  padding: 2rem;
  p {
    color: white;
  }
`;

const g1 = 'checkbox-group-a';
const g2 = 'checkbox-group-b';

const CheckboxGroupView = () => {
  const [checkboxGroupA, updateCheckboxGroupA] = useState(['A-1', 'A-6']);
  const [checkboxGroupB, updateCheckboxGroupB] = useState(['B-2']);
  const [validationMessageGroupA, setValidationMessageGroupA] = useState('');
  const [validationMessageGroupB, setValidationMessageGroupB] = useState('');

  const handleGroupSelection = (selectedCheckboxes, group) => {
    if (group === g1) {
      updateCheckboxGroupA(selectedCheckboxes);
      if (selectedCheckboxes.length) {
        setValidationMessageGroupA('Oops that doesn\'t seem right');
      } else {
        setValidationMessageGroupA(null);
      }
    } else {
      updateCheckboxGroupB(selectedCheckboxes);
      if (selectedCheckboxes.length) {
        setValidationMessageGroupB('Sorry, but selecting anything in this checkbox will trigger a validation message!');
      } else {
        setValidationMessageGroupB(null);
      }
    }
  };

  return (
    <StyledGridView>
      <Container>
        <Row>
          <Column offset={2} cols={10}>
            <CheckboxGroup
              label="Group A"
              tooltip={{ title: 'Group A', body: 'This is a tooltip for group A' }}
              validationMessage={validationMessageGroupA}
              groupId={g1}
              colSize="6"
              handleChange={(selectedCheckboxes) => handleGroupSelection(selectedCheckboxes, g1)}
              selected={checkboxGroupA}
            >
              <Checkbox id="A-1" label="A-1 check" />
              <Checkbox id="A-2" label="A-2 check" />
              <Checkbox id="A-3" label="A-3 check" />
              <Checkbox id="A-4" label="A-4 check" />
              <Checkbox id="A-5" label="A-5 check" />
              <Checkbox id="A-6" label="A-6 check" />
            </CheckboxGroup>
          </Column>
        </Row>
        <Row>
          <Column offset={2} cols={10}>
            <CheckboxGroup
              label="Group B"
              validationMessage={validationMessageGroupB}
              groupId={g2}
              colSize="6"
              handleChange={(selectedCheckboxes) => handleGroupSelection(selectedCheckboxes, g2)}
              selected={checkboxGroupB}
            >
              <Checkbox id="B-1" label="B-1 check" />
              <Checkbox id="B-2" label="B-1 check" />
              <Checkbox id="B-3" label="B-1 check" />
              <Checkbox id="B-4" label="B-1 check" />
              <Checkbox id="B-5" label="B-1 check" />
              <Checkbox id="B-6" label="B-1 check" />
            </CheckboxGroup>
          </Column>
        </Row>

        <Row>
          <Column offset={2} cols={10}>
            <StyledResults>
              {checkboxGroupA.length || checkboxGroupB.length
                ? (
                  <>
                    <p>
                      {g1}
                      :
                      {' '}
                      {checkboxGroupA.map((checkbox) => checkbox).join(', ')}
                    </p>
                    <p>
                      {g2}
                      :
                      {' '}
                      {checkboxGroupB.map((checkbox) => checkbox).join(', ')}
                    </p>
                  </>
                )
                : <p>Nothing selected</p>}
            </StyledResults>
          </Column>
        </Row>
      </Container>
    </StyledGridView>
  );
};

export default CheckboxGroupView;
