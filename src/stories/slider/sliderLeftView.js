import React, { useState } from 'react';

import Slider from 'components/Slider/Slider.component';
import Overlay from 'components/Overlay/Overlay.component';
import Container from 'components/Grid/Container/Container.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Separator from 'components/Separator/Separator.component';
import Tooltip from 'components/Tooltip/Tooltip.component';
import Button from 'components/Button/Button.component';
import useBreakpoint from 'hooks/useBreakpoint';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledBar = styled.div`
  margin-bottom: 5.4rem;
  margin-top: 5.4rem;
  height: 6.4rem;
  background: ${(props) => props.theme.colors.blueDark}
`;

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
  border: 1px solid ${(props) => props.theme.colors.greyLight}
`;

const SliderLeft = () => {
  const [show, setShow] = useState(false);
  const clickMe = () => {
    setShow(!show);
  };
  const onClose = () => {
    setShow(false);
  };
  const breakpoint = useBreakpoint(false);

  return (
    <ThemeProvider theme={getTheme()}>
      <div>

        {show && <Overlay opacityLevel={0.3} onClose={onClose} />}
        {show && (
        <Slider
          notificationSize={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '50%'}`}
          show={show}
          onClose={onClose}
          iconClassName="closeIconSlide"
          direction="left"
          closeButton
        >
          <Container>
            <Row>
              <Column cols="12" sm="12" md="12">
                <Container>
                  <Row className="row-view">
                    <Column cols="12">
                      <div>
                        <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                        <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee
                        </p>
                        <Separator />
                      </div>
                      <div>
                        <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                        <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee
                        </p>
                        <Separator />
                      </div>
                      <div>
                        <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                        <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee |
                          Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                          Application fee
                        </p>
                        <Separator />
                      </div>
                    </Column>
                  </Row>
                  <Row>
                    <Column cols="12" className="items-baseline"><Separator type="vertical" /></Column>
                  </Row>
                </Container>
              </Column>
              <Column cols="12" sm="12" md="12">
                <Container>
                  <Row className="row-view">
                    <Column cols="12">
                      <div>
                        <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                        <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee
                        </p>
                        <Separator />
                      </div>
                      <div>
                        <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                        <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee
                        </p>
                        <Separator />
                      </div>
                      <div>
                        <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                        <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee
                        </p>
                        <Separator />
                      </div>
                    </Column>
                  </Row>
                  <Row>
                    <Column cols="12" className="items-baseline"><Separator type="vertical" /></Column>
                  </Row>
                </Container>
              </Column>
              <Column cols="12" sm="12" md="12">
                <Container>
                  <Row className="row-view">
                    <Column cols="12">
                      <div className="manor-rich-text">
                        <div>
                          <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                          <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee
                          </p>
                          <Separator />
                        </div>
                        <div>
                          <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                          <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee
                          </p>
                          <Separator />
                        </div>
                        <div>
                          <p className="subtitle-2" style={{ marginBottom: '2rem' }}>Description</p>
                          <p>Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee |
                            Based on your risk profile you will receive a tailored rate between 6.45% and 18.56%. $299
                            Application fee
                          </p>
                        </div>
                      </div>
                    </Column>
                  </Row>
                </Container>
              </Column>
            </Row>
          </Container>
        </Slider>
        )}
        <StyledBar />
        <Container>
          <Row className="row-view">
            <Column cols="4" sm="12" md="4" offset="4">
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
                        <div style={{ margin: 'auto' }}>
                          <Container>
                            <Row className="row-view">
                              <Column className="col-auto" style={{ justifyContent: 'center' }}><h4 style={{ margin: '0' }}>2</h4></Column>
                              <Column className="col-auto" style={{ justifyContent: 'center' }}><Tooltip title="some title" body="some body" /></Column>
                            </Row>
                          </Container>
                        </div>
                      </Column>
                      <Column cols="2" className="items-center"><Separator type="vertical" /></Column>
                      <Column cols="5"><p style={{ color: '#818181' }}>Term</p> <h4>2 months</h4></Column>
                    </Row>
                  </Container>
                </div>
                <p style={{ marginTop: '3.2rem' }}>Interest paid Monthly, Quarterly, End of term</p>
                <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                  <Button id="primary-btn01" variant="primary" btnSize="md" content="Go to site" disabled={false} />
                  <Button id="text-btn01" variant="link" content="More info" disabled={false} href="#/" handleClick={clickMe} target="_self" />
                </div>
              </StyledCard>
            </Column>
          </Row>
        </Container>

      </div>
    </ThemeProvider>
  );
};

export default SliderLeft;
