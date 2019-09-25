import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({
  checkboxesArr, colSize, groupId, handleClick,
}) => {
  const generateCheckboxes = () => checkboxesArr.map((checkbox, idx) => (
    <Column col={colSize} key={`col-${checkbox.id}${idx}`}>
      <Checkbox
        id={checkbox.id}
        invertColour={checkbox.invertColour}
        icon={checkbox.icon}
        size={checkbox.size}
        key={`${checkbox.id}${idx}`}
        handleClick={handleClick}
      >
        <div className={`${styles['checkbox-content']}`}>
          <p>{checkbox.content}</p>
        </div>
      </Checkbox>
    </Column>
  ));

  return (
    <div id={groupId} className="checkbox-group">
      <Row>
        {generateCheckboxes()}
      </Row>
    </div>
  );
};

CheckboxGroup.propTypes = {
  checkboxesArr: PropTypes.array.isRequired,
  colSize: PropTypes.string,
  groupId: PropTypes.string,
  invertColour: PropTypes.bool,
};

CheckboxGroup.defaultProps = {

};

export default CheckboxGroup;
