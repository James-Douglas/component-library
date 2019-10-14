import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Input from '../Input/Input.component';
import Row from "../Grid/Row/Row.component";
import Column from "../Grid/Column/Column.component";
import Container from "../Grid/Container/Container.component";


const Combo = ({
  value,
  id
}) => {
  const linkTextString = "Can't find your address?";
  const onChange = (event) => {
    console.log(event.target.value)
  }
  return (

    <Container>
      <style jsx>{styles}</style>
      <Input handleChange={(e) => onChange} id={id} />
      <Row className="row-view section-hide">
        <Column className="col-view" col="10">
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li className="item-manual-lookup item">
              {linkTextString}
            </li>
          </ul>
        </Column>
      </Row>
    </Container>
  );
};

Combo.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
};

Combo.defaultProps = {
  value: '',
  id: '',
};

export default Combo;
