import React, { useState } from 'react';
import Container from 'components/Grid/Container/Container.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Modal from 'components/Modal/Modal.component';
import Button from 'components/Button/Button.component';
import Checkbox from 'components/Checkbox/Checkbox.component';
import Input from 'components/Input/Input.component';
import Table from '../../components/Table/Table/Table.component';
import TableBody from '../../components/Table/TableBody/TableBody.component';
import TableRow from '../../components/Table/TableRow/TableRow.component';
import TableCell from '../../components/Table/TableCell/TableCell.component';

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
    <Container>
      <Row>
        <Column md={4}>
          <Button id="demo-1-btn" variant="secondary" handleClick={m1Open}>
            Modal one
          </Button>
        </Column>
        <Modal id="demo-1" visible={m1Visible} handleClose={closeModals} size="lg" overlay overlayOpacity={0.3} title="Email Results">
          &nbsp;
          <p>Access these search results later from any device</p>
          &nbsp;
          <Input id="modal-input" label="Email address" placeholder="Enter your email address" handleChange={() => {}} />
          &nbsp;
          <Table ariaLabel="Receive emails" size="small" ariaDescribedby="IDREF">
            <TableBody>
              <TableRow>
                <TableCell align="left" valign="baseline" padding="none"><Checkbox id="chk1" /></TableCell>
                <TableCell align="left" valign="middle"><p>I would like to receive emails about great deals on Compare the Market in the future. If you change your mind, you can unsubscribe at any time.</p></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          &nbsp;
          <Button id="modal-email" variant="primary" size="lg">
            Send Email
          </Button>
        </Modal>
        <Column md={4}>
          <Button id="demo-2-btn" variant="secondary" handleClick={m2Open}>
            Modal two
          </Button>
        </Column>
        <Modal id="demo-2" visible={m2Visible} handleClose={closeModals} size="sm" overlay overlayOpacity={0.3} title="Another modal">
          &nbsp;
          <p>Another bit of content</p>
        </Modal>
      </Row>
    </Container>
  );
};

export default ModalView;
