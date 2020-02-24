import React, { useState } from 'react';

import Drawer from 'components/Drawer/Drawer.component';
import Container from 'components/Grid/Container/Container.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Separator from 'components/Separator/Separator.component';
import Tooltip from 'components/Tooltip/Tooltip.component';
import Button from 'components/Button/Button.component';
import useBreakpoint from 'hooks/useBreakpoint';
import styled from 'styled-components';

const StyledBar = styled.div`
  margin-bottom: 5.4rem;
  height: 6.4rem;
  background: ${(props) => props.theme.colors.brandMidnightBlue};
`;

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
  border: 1px solid ${(props) => props.theme.colors.greyLight};
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
            <Column cols="12" sm="12" md="12">
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
          <Column cols="12" sm="12" md="12">
            <StyledCard>
              <h5>Term Deposit Name</h5>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div style={{ marginTop: '4.8rem' }}>
                <Container>
                  <Row className="row-view">
                    <Column cols="5">
                      <p style={{ color: '#818181' }}>Interest rate</p>
                      <Row className="row-view">
                        <Column className="col-auto"><h4 style={{ margin: '0' }}>2&nbsp;months</h4></Column>
                        <Column className="col-auto" halign="center"><Tooltip title="some title" body="some body" /></Column>
                      </Row>
                    </Column>
                    <Column cols="2" className="items-center"><Separator type="vertical" /></Column>
                    <Column cols="5"><p style={{ color: '#818181' }}>Term</p> <h4>2 months</h4></Column>
                  </Row>
                </Container>
              </div>
              <p style={{ marginTop: '3.2rem' }}>Interest paid Monthly, Quarterly, End of term</p>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button id="primary-btn01" variant="primary" btnSize="md" disabled={false}>
                  Go to site
                </Button>
                <Button id="text-btn01" variant="link" disabled={false} href="#/" handleClick={clickMe} target="_self">
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
