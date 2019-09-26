import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import styles from './styles';

const CheckboxGroup = ({
  checkboxesArr, colSize, groupId, handleClick,
}) => {
  const generateCheckboxes = () => checkboxesArr.map((checkbox) => (
    <Column col={colSize} key={`col-${checkbox.id}`}>
      <Checkbox
        id={checkbox.id}
        invertColour={checkbox.invertColour}
        icon={checkbox.icon}
        key={`${checkbox.id}`}
        handleClick={handleClick}
        disabled={checkbox.disabled}
      >
        <style jsx>{styles}</style>
        <div className="checkbox-content">
          <p>{checkbox.content}</p>
        </div>
      </Checkbox>
    </Column>
  ));

  return (
    <>
      <style jsx>{styles}</style>
      <div id={groupId} className="checkbox-group">
        <Row>
          {generateCheckboxes()}
        </Row>
      </div>
    </>
  );
};

CheckboxGroup.propTypes = {
  groupId: PropTypes.string.isRequired,
  checkboxesArr: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  colSize: PropTypes.string,
  handleClick: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  colSize: '6',
  handleClick: () => {},
};

export default CheckboxGroup;
