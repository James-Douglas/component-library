import React from 'react';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import styles from './checkbox-view';

const CheckboxWhiteView = () => (
  <>
    <style jsx>{styles}</style>
    <div className="background">
      <div className="demo-container">
        <div className="centered">
          <Container>
            <Row>
              <Column col="1">
                <Checkbox id="chk1" />
              </Column>
              <Column>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium. </p>
                  <p>Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Tincidunt dui ut ornare lectus sit amet est placerat. </p>
                </div>
              </Column>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  </>
);

export default CheckboxWhiteView;
