import React, { useState } from 'react';
import Slider from 'components/Slider/Slider.component';
import Overlay from 'components/Overlay/Overlay.component';
import Container from 'components/Grid/Container/Container.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Separator from 'components/Separator/Separator.component';
import Tooltip from 'components/Tooltip/Tooltip.component';
import Button from 'components/Button/Button.component';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Toggle from '../../components/Toggles/Toggle.component';
import ToggleGroup from '../../components/Toggles/ToggleGroup.component';

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

const StyledSliderContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

const StyledSliderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SliderTop = () => {
  const [show, setShow] = useState(false);
  const clickMe = () => {
    setShow(!show);
  };
  const onClose = () => {
    setShow(false);
  };

  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(`toggle selected: ${value} `);
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <div>

        {show && <Overlay opacityLevel={0.3} onClose={onClose} />}
        {show && (
        <Slider notificationSize="150px" show={show} direction="top">
          <StyledSliderContent>
            <Container className="mt-24">
              <Row>
                <Column col="12" sm="12" md="12">
                  <Container>
                    <Row className="row-view">
                      <Column col="12">
                        <div className="manor-rich-text">
                          <StyledSliderInner>
                            <h4>Compare Personal Loans</h4>
                            <div>
                              <ToggleGroup
                                name="toggleGroupE"
                                onToggle={handleChange}
                                disableFieldset
                                rectOptions={{
                                  col: 6,
                                  height: 6,
                                  align: 'center',
                                }}
                              >
                                <Toggle value="x1" id="long4" label="Comprehensive" />
                                <Toggle value="x3" id="long5" label="Third Party Property Damage" />
                              </ToggleGroup>
                            </div>
                            <Button id="secondary-btn02" variant="secondary" size="md" content="Compare Personal Loans" disabled={false} />
                          </StyledSliderInner>
                        </div>
                      </Column>
                    </Row>
                    <Row>
                      <Column col="12" className="items-baseline"><Separator type="vertical" /></Column>
                    </Row>
                  </Container>
                </Column>
              </Row>
            </Container>
          </StyledSliderContent>
        </Slider>
        )}
        <StyledBar />
        <Container>
          <Row className="row-view">
            <Column col="4" sm="12" md="4" offset="4">
              <StyledCard>
                <h5>Term Deposit Name</h5>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div style={{ marginTop: '4.8rem' }}>
                  <Container>
                    <Row className="row-view">
                      <Column col="5">
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
                      <Column col="2" className="items-center"><Separator type="vertical" /></Column>
                      <Column col="5"><p style={{ color: '#818181' }}>Term</p> <h4>2 months</h4></Column>
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

export default SliderTop;
