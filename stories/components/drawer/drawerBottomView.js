import React, { useState } from 'react';
import { DrawerHorizontal } from '@comparethemarketau/manor-drawer';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import { FluidContainer, Row, Column } from '@comparethemarketau/manor-grid';
import { Button } from '@comparethemarketau/manor-button';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
import styled from 'styled-components';

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
`;
const StyledDrawerContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

const DrawerBottom = () => {
  const [show, setShow] = useState(false);
  const breakpoint = useBreakpoint(false);

  return (
    <ManorProvider>
      <DrawerHorizontal
        size={300}
        trackingLabel="drawer bottom"
        keyLine={!(breakpoint === 'xs' || breakpoint === 'sm')}
        visible={show}
        direction="bottom"
        handleClose={() => setShow(false)}
        iconClassName="closeIconSlide"
        closeButton
        trapFocus
      >
        <StyledDrawerContent>
          <FluidContainer>
            <Row>
              <Column cols={12}>
                <div>
                  <Typography variant="body1">Hi I am a Drawer with a keyline border on desktop, none on mobile view :)</Typography>
                </div>
              </Column>
            </Row>
          </FluidContainer>
        </StyledDrawerContent>
      </DrawerHorizontal>
      <div>
        <Row className="row-view">
          <Column cols={12} valign="center">
            <StyledCard>
              <Typography variant="h4">Basic Drawer demo</Typography>
              <Typography variant="body1">This is an example of the Drawer component.</Typography>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button
                  id="btn01"
                  variant="primary"
                  handleClick={() => {setShow(!show)}}
                >
                  Click me
                </Button>
              </div>
            </StyledCard>
          </Column>
        </Row>
      </div>
    </ManorProvider>
  );
};

export default DrawerBottom;
