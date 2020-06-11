import React, { useState } from 'react';
import { Drawer } from '@comparethemarketau/manor-drawer';
import { Container, Row, Column } from '@comparethemarketau/manor-grid';
import { Separator } from '@comparethemarketau/manor-separator';
import { Tooltip } from '@comparethemarketau/manor-tooltip';
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

const DrawerRight = () => {
  const [show, setShow] = useState(false);
  const clickMe = () => {
    setShow(!show);
  };
  const breakpoint = useBreakpoint(false);

  return (
    <>
      <Drawer
        size={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '50%'}`}
        visible={show}
        handleClose={() => setShow(false)}
        iconClassName="closeIconSlide"
        closeButton
        overlay
        overlayOpacity={0.3}
      >
        <Container>
          <Row>
            <Column cols={12}>
              <div>
                <h4>Hi I am a right drawer :)</h4>
              </div>
            </Column>
          </Row>
        </Container>
      </Drawer>
      <StyledBar />
      <Container>
        <Row className="row-view">
          <Column cols={12}>
            <StyledCard>
              <h5>Term Deposit Name</h5>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div style={{ marginTop: '4.8rem' }}>
                <Container>
                  <Row className="row-view">
                    <Column cols={5}>
                      <p style={{ color: '#818181' }}>Interest rate</p>
                      <Row className="row-view">
                        <Column><h4 style={{ margin: '0' }}>2&nbsp;months</h4></Column>
                        <Column halign="center"><Tooltip title="some title" body="some body" /></Column>
                      </Row>
                    </Column>
                    <Column cols={2} className="items-center"><Separator type="vertical" /></Column>
                    <Column cols={5}><p style={{ color: '#818181' }}>Term</p> <h4>2 months</h4></Column>
                  </Row>
                </Container>
              </div>
              <p style={{ marginTop: '3.2rem' }}>Interest paid Monthly, Quarterly, End of term</p>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button id="btn01" variant="primary">
                  Go to site
                </Button>
                <Button id="btn02" variant="secondary" handleClick={clickMe}>
                  More info
                </Button>
              </div>
            </StyledCard>
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default DrawerRight;
