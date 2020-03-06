import React, { useState } from 'react';
import Drawer from 'components/Drawer/Drawer.component';
import FluidContainer from 'components/Grid/Container/FluidContainer.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Button from 'components/Button/Button.component';
import useBreakpoint from 'hooks/useBreakpoint';
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
    <>
      <Drawer
        size={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '160px'}`}
        keyLine={!(breakpoint === 'xs' || breakpoint === 'sm')}
        visible={show}
        direction="bottom"
        handleClose={() => setShow(false)}
        iconClassName="closeIconSlide"
        closeButton

      >
        <StyledDrawerContent>
          <FluidContainer className="mt-24">
            <Row>
              <Column cols="12" sm="12" md="12">
                <div>
                  <h4>Hi I am a Drawer with a keyline border on desktop, none on mobile view :)</h4>
                </div>
              </Column>
            </Row>
          </FluidContainer>
        </StyledDrawerContent>
      </Drawer>
      <div>
        <Row className="row-view">
          <Column cols="12" valign="center">
            <StyledCard>
              <h4>Basic Drawer demo</h4>
              <p>This is an example of the Drawer component.</p>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button
                  id="btn01"
                  variant="primary"
                  handleClick={() => setShow(!show)}
                >
                  Click me
                </Button>
              </div>
            </StyledCard>
          </Column>
        </Row>
      </div>
    </>
  );
};

export default DrawerBottom;
