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

  const logEvent1 = (selectedCheckboxes) => {
    console.warn(`called`)
    // console.warn(selectedCheckboxes);
    // if (value) {
    //     //   updateCheckboxGroupA(clickedItems(checkboxGroupA, id));
    //     // }
    // console.warn(clickedItems(checkboxGroupA, id));
  };

  const logEvent2 = ({id, value}) => {
    console.warn(`called`)
    // console.warn(`value: ${value}`);
    // updateCheckboxGroupB(clickedItems(checkboxGroupB, id));
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="grid-view">
        <Container>
          <CheckboxGroup groupId={g1} colSize="6" handleClick={logEvent1}>
            <Checkbox id="A-1" icon="check">A-1 check</Checkbox>
            <Checkbox id="A-2" icon="check">A-2 check</Checkbox>
            <Checkbox id="A-3" icon="check">A-3 check</Checkbox>
            <Checkbox id="A-4" icon="check">A-4 check</Checkbox>
            <Checkbox id="A-5" icon="check">A-5 check</Checkbox>
            <Checkbox id="A-6" icon="check">A-6 check</Checkbox>
          </CheckboxGroup>
          <CheckboxGroup groupId={g2} colSize="6" handleClick={logEvent2}>
            <Checkbox id="B-1" icon="check">B-1 check</Checkbox>
            <Checkbox id="B-2" icon="check">B-2 check</Checkbox>
            <Checkbox id="B-3" icon="check">B-3 check</Checkbox>
            <Checkbox id="B-4" icon="check">B-4 check</Checkbox>
            <Checkbox id="B-5" icon="check">B-5 check</Checkbox>
            <Checkbox id="B-6" icon="check">B-6 check</Checkbox>
          </CheckboxGroup>

          {/*<div className="results-container">*/}
          {/*  {checkboxGroupA.length || checkboxGroupB.length*/}
          {/*    ? (*/}
          {/*      <>*/}
          {/*        <p className="results">*/}
          {/*          {g1}*/}
          {/*    :*/}
          {/*          {' '}*/}
          {/*          {checkboxGroupA.join(', ')}*/}
          {/*        </p>*/}
          {/*        <p className="results">*/}
          {/*          {g2}*/}
          {/*    :*/}
          {/*          {' '}*/}
          {/*          {checkboxGroupB.join(', ')}*/}
          {/*        </p>*/}
          {/*      </>*/}
          {/*    )*/}
          {/*    : <p className="results">Nothing selected</p>}*/}
          {/*</div>*/}

        </Container>
      </div>
    </>
  );
};

export default CheckboxGroupView;
