import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
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
  font-size: ${(props) => props.theme.fontSize.base}
  line-height: ${(props) => props.theme.lineHeight.relaxed}
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledResults = styled.div`
  min-height: 120px;
  width: 100%;
  background: #143D96;
  color: white;
  padding: 2rem;
`;

const g1 = 'checkbox-group-a';
const g2 = 'checkbox-group-b';


const CheckboxGroupView = () => {
  const [checkboxGroupA, updateCheckboxGroupA] = useState([]);
  const [checkboxGroupB, updateCheckboxGroupB] = useState([]);
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
        setValidationMessageGroupB('Sorry, but selecting anything in this checkbox will trigger a validation message, for science!');
      } else {
        setValidationMessageGroupB(null);
      }
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>

      <StyledGridView>
        <Container>
          <Row>
            <Column offset={2} col={10}>
              <CheckboxGroup
                label="Group A"
                tooltip={{ title: 'Group A', body: 'This is a tooltip for group A' }}
                validationMessage={validationMessageGroupA}
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
                label="Group B"
                validationMessage={validationMessageGroupB}
                groupId={g2}
                colSize="6"
                handleChange={(selectedCheckboxes) => handleGroupSelection(selectedCheckboxes, g2)}
              >
                <Checkbox id="B-1" icon="check">B-1 check</Checkbox>
                <Checkbox id="B-2" icon="check" isSelected>B-2 check</Checkbox>
                <Checkbox id="B-3" icon="check">B-3 check</Checkbox>
                <Checkbox id="B-4" icon="check" isSelected>B-4 check</Checkbox>
                <Checkbox id="B-5" icon="check">B-5 check</Checkbox>
                <Checkbox id="B-6" icon="check" isSelected>B-6 check</Checkbox>
              </CheckboxGroup>
            </Column>
          </Row>

          <Row>
            <Column offset={2} col={10}>
              <StyledResults>
                {checkboxGroupA.length || checkboxGroupB.length
                  ? (
                    <>
                      <p>
                        {g1}
                        :
                        {' '}
                        {checkboxGroupA.map((checkbox) => checkbox.id).join(', ')}
                      </p>
                      <p>
                        {g2}
                        :
                        {' '}
                        {checkboxGroupB.map((checkbox) => checkbox.id).join(', ')}
                      </p>
                    </>
                  )
                  : <p>Nothing selected</p>}
              </StyledResults>
            </Column>
          </Row>
        </Container>
      </StyledGridView>
    </ThemeProvider>
  );
};

export default CheckboxGroupView;
