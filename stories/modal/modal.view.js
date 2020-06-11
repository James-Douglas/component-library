import React, { useState } from 'react';
import {Row, Column, FluidContainer } from '@comparethemarketau/manor-grid';
import { Modal } from '@comparethemarketau/manor-modal';
import { Button } from '@comparethemarketau/manor-button';
import { Checkbox } from '@comparethemarketau/manor-checkbox';
import { Input } from '@comparethemarketau/manor-input';
import { Table, TableBody, TableRow, TableCell } from '@comparethemarketau/manor-table';

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
    <FluidContainer>
      <Row>
        <Column xsOffset={4} xs={4} sm={4} md={4} lg={4}>
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
        <Column xsOffset={4} xs={4} sm={4} md={4} lg={4}>
          <Button id="demo-2-btn" variant="secondary" handleClick={m2Open}>
            Modal two
          </Button>
        </Column>
        <Modal id="demo-2" visible={m2Visible} handleClose={closeModals} size="sm" overlay overlayOpacity={0.3} title="Another modal">
          &nbsp;
          <p>Another bit of content</p>
        </Modal>
      </Row>
    </FluidContainer>
  );
};

export default ModalView;
