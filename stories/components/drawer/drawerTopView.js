import React, { useState } from 'react';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { DrawerHorizontal } from '@comparethemarketau/manor-drawer';
import { Container, Row, Column } from '@comparethemarketau/manor-grid';
import { Typography } from '@comparethemarketau/manor-typography';
import { Button } from '@comparethemarketau/manor-button';
import styled from 'styled-components';

const StyledBar = styled.div`
  margin-bottom: 5.4rem;
  height: 6.4rem;
  background: ${(props) => props.theme.colors.brandMidnightBlue};
`;

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
  border: 1px solid ${(props) => props.theme.colors.grey100};
  max-width: 600px;
  margin: auto;
`;

const StyledDrawerContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

const DrawerTop = () => {
  const [show, setShow] = useState(false);
  const clickMe = () => {
    setShow(!show);
  };
  return (
    <ManorProvider>
      <DrawerHorizontal
        trackingLabel="drawer top"
        size={250}
        visible={show}
        direction="top"
        handleClose={() => setShow(false)}
        overlay
        closeButton
        overlayOpacity={0.3}
      >
        <StyledDrawerContent>
          <Row>
            <Column cols={12}>
              <div>
                <Typography variant="body1">Hi I am a top drawer :)</Typography>
              </div>
            </Column>
          </Row>
        </StyledDrawerContent>
      </DrawerHorizontal>
      <StyledBar />
      <Container>
        <Row className="row-view">
          <Column cols={12}>
            <StyledCard>
              <Typography variant="h5">Term Deposit Name</Typography>
              <Typography variant="body1">
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button id="btn02" variant="secondary" handleClick={clickMe}>
                  More info
                </Button>
              </div>
            </StyledCard>
          </Column>
        </Row>
      </Container>
    </ManorProvider>
  );
};

export default DrawerTop;
