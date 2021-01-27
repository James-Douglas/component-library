import React, { useState } from 'react';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { DrawerVertical } from '@comparethemarketau/manor-drawer';
import { Typography } from '@comparethemarketau/manor-typography';
import { Container, Row, Column } from '@comparethemarketau/manor-grid';
import { Button } from '@comparethemarketau/manor-button';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
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

const DrawerLeft = () => {
  const [show, setShow] = useState(false);
  const clickMe = () => {
    setShow(!show);
  };
  const breakpoint = useBreakpoint(false);
  return (
    <ManorProvider>
      <DrawerVertical
        size={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '50%'}`}
        visible={show}
        handleClose={() => setShow(false)}
        iconClassName="closeIconSlide"
        direction="left"
        closeButton
        overlay
        overlayOpacity={0.3}
      >
        <Container>
          <Row>
            <Column cols={12}>
              <div>
                <Typography variant="body1">Hi I am a left drawer :)</Typography>
              </div>
            </Column>
          </Row>
        </Container>
      </DrawerVertical>
      <StyledBar />
      <Container>
        <Row className="row-view">
          <Column cols={12}>
            <StyledCard>
              <Typography variant="h5">Term Deposit Name</Typography>
              <Typography variant="body1">It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button id="text-btn01" variant="secondary" handleClick={clickMe}>
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

export default DrawerLeft;
