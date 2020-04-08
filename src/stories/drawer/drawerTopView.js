import React, { useState } from 'react';
import Drawer from 'components/Drawer/Drawer.component';
import Container from 'components/Grid/Container/Container.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Separator from 'components/Separator/Separator.component';
import Tooltip from 'components/Tooltip/Tooltip.component';
import Button from 'components/Button/Button.component';
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
    <>
      <Drawer
        size="150px"
        visible={show}
        direction="top"
        handleClose={() => setShow(false)}
        overlay
        overlayOpacity={0.3}
      >
        <StyledDrawerContent>
          <Row>
            <Column cols={12}>
              <div>
                <h4>Hi I am a top drawer :)</h4>
              </div>
            </Column>
          </Row>
        </StyledDrawerContent>
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

export default DrawerTop;
