import React, { useState } from 'react';

import Slider from '../../components/Slider/Slider.component';
import Overlay from '../../components/Overlay/Overlay.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import Separator from '../../components/Separator/Separator.component';
import Tooltip from '../../components/Tooltip/Tooltip.component';
import Button from '../../components/Button/Button.component';
import useBreakpoint from '../../hooks/useBreakpoint';
import styles from './styles';

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
    <div className="manor-rich-text">
      <style jsx>{styles}</style>
      {show && <Overlay opacityLevel={0.3} onClose={onClose} />}
      <Slider
        notificationSize={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '50%'}`}
        show={show}
        onClose={onClose}
        iconClassName="closeIconSlide"
        closeButton
      >
        <div className="mt-64 pl-20 pr-20 pb-20">
          <Container className="mt-54">
            <Row>
              <Column col="12" sm="12" md="12">
                <Container>
                  <Row className="row-view">
                    <Column col="12">
                      <div className="manor-rich-text">
                        <div>
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                      </div>
                    </Column>
                  </Row>
                  <Row>
                    <Column col="12" className="items-baseline"><Separator type="vertical" /></Column>
                  </Row>
                </Container>
              </Column>
              <Column col="12" sm="12" md="12">
                <Container>
                  <Row className="row-view">
                    <Column col="12">
                      <div className="manor-rich-text">
                        <div>
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                      </div>
                    </Column>
                  </Row>
                  <Row>
                    <Column col="12" className="items-baseline"><Separator type="vertical" /></Column>
                  </Row>
                </Container>
              </Column>
              <Column col="12" sm="12" md="12">
                <Container>
                  <Row className="row-view">
                    <Column col="12">
                      <div className="manor-rich-text">
                        <div>
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                          <p className="manor-subtitle2 mb-20">Description</p>
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
                          <p className="manor-subtitle2 mb-20">Description</p>
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
        </div>
      </Slider>
      <div className="mt-54 mb-54 h-64 bg-dark-blue" />
      <Container>
        <Row className="row-view">
          <Column col="4" sm="12" md="4" offset="4">
            <div className="text-center manor-body1 p-40 border border-solid border-grey-light">
              <h5 className="mb-20">Term Deposit Name</h5>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="mt-48">
                <Container>
                  <Row className="row-view">
                    <Column col="5">
                      <p style={{ color: '#818181' }}>Interest rate</p>
                      <div className="w-auto m-auto">
                        <Container>
                          <Row className="row-view">
                            <Column className="col-auto justify-center"><span className="m-0 manor-h4">2</span></Column>
                            <Column className="col-auto justify-center"><Tooltip title="some title" body="some body" /></Column>
                          </Row>
                        </Container>
                      </div>
                    </Column>
                    <Column col="2" className="items-center"><Separator type="vertical" /></Column>
                    <Column col="5"><p style={{ color: '#818181' }}>Term</p> <span className="manor-h4">2 months</span></Column>
                  </Row>
                </Container>
              </div>
              <p className="mt-32 manor-microcopy">Interest paid Monthly, Quarterly, End of term</p>
              <div className="inline-block mt-48">
                <Button id="primary-btn01" btnType="primary" btnSize="md" content="Go to site" disabled={false} />
                <Button id="text-btn01" type="link" content="More info" disabled={false} href="#/" handleClick={clickMe} target="_self" />
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default SliderLeft;
