import React, { useState } from 'react';
import Modal from 'components/Modal/Modal.component';
import Overlay from 'components/Overlay/Overlay.component';
import Button from 'components/Button/Button.component';
import Checkbox from 'components/Checkbox/Checkbox.component';
import Input from 'components/Input/Input.component';
import css from 'styled-jsx/css';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';

const styles = css`
  .view-style {
    @apply h-screen w-screen mt-64;
  }
`;

const ModalView = () => {
  const [m1Visible, setM1Visible] = useState(false);
  const [m2Visible, setM2Visible] = useState(false);

  const m1Open = () => {
    closeModals();
    setM1Visible(!m1Visible);
  };

  const m2Open = () => {
    closeModals();
    setM2Visible(!m2Visible);
  };

  const closeModals = () => {
    setM1Visible(false);
    setM2Visible(false);
  };

  return (
    <>
      <style jsx>{styles}</style>

      {(m1Visible || m2Visible) && <Overlay opacityLevel={0.3} onClose={closeModals} />}
      <Button id="demo-1-btn" type="secondary" handleClick={m1Open} content="Modal one" />
      <Modal id="demo-1" visible={m1Visible} handleClose={closeModals} size="md">
        <h2>Email Results</h2>
        &nbsp;
        <p>Access these search results later from any device</p>
        &nbsp;
        <Input id="modal-input" label="Email address" placeholder="Enter your email address" handleChange={() => {}} />

        <Row>
          <Column col="1">
            <Checkbox id="chk1" />
          </Column>
          <Column>
            <div className="content">
              <p>I would like to receive emails about great deals on Compare the Market in the future. If you change your mind, you can unsubscribe at any time.</p>
            </div>
          </Column>

        </Row>
        &nbsp;
        <Button id="modal-email" type="primary" content="Send Email" size="lg" />
      </Modal>

      <Button id="demo-2-btn" type="secondary" handleClick={m2Open} content="Modal two" />

      <Modal id="demo-2" visible={m2Visible} handleClose={closeModals} size="sm">
        <h2>Another modal</h2>
        &nbsp;
        <p>Another bit of content</p>
      </Modal>
    </>
  );
};

export default ModalView;
