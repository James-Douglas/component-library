import React from 'react';
import CardGroup from '../../components/Card/CardGroup.component';
import Card from '../../components/Card/Card.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import StoryTemplate from '../storyTemplate';
import Button from '../../components/Button/Button.component';

// eslint-disable-next-line react/prop-types
const CardResultsView = ({ background }) => (
  <StoryTemplate background={background}>
    <CardGroup id="test" cols={1}>
      <Card id="a">
        <Container>
          <div style={{ padding: '3rem 0rem', width: '100%' }}>
            <Row>
              <Column col={9}>
                <Container>
                  <Row>
                    <Column col={4}><h5>Test Product A</h5></Column>
                    <Column col={2}><span className="manor-overline">Advertised rate</span></Column>
                    <Column col={2}><span className="manor-overline">Comparison rate</span></Column>
                    <Column col={2}><span className="manor-overline">Fees</span></Column>
                    <Column col={2}><span className="manor-overline">Repayments</span></Column>
                  </Row>
                  <Row>
                    <Column col={4}>
                      <p className="manor-body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua.
                      </p>
                    </Column>
                    <Column col={2}>
                      <p>7.65%</p>
                    </Column>
                    <Column col={2}>
                      <p>4.8%</p>
                    </Column>
                    <Column col={2}>
                      <p>$75.00</p>
                    </Column>
                    <Column col={2}>
                      <p>$549.00</p>
                    </Column>
                  </Row>

                </Container>
              </Column>
              <Column col={3}>
                <div style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <Button id="a" btnType="primary" content="Go to site" />
                  <Button id="a" btnType="link" content="More info" />
                </div>
              </Column>
            </Row>
          </div>
        </Container>
      </Card>
      <Card id="b">
        <Container>
          <div style={{ padding: '3rem 0rem', width: '100%' }}>
            <Row>
              <Column col={9}>
                <Container>
                  <Row>
                    <Column col={4}><h5>Test Product B</h5></Column>
                    <Column col={2}><span className="manor-overline">Advertised rate</span></Column>
                    <Column col={2}><span className="manor-overline">Comparison rate</span></Column>
                    <Column col={2}><span className="manor-overline">Fees</span></Column>
                    <Column col={2}><span className="manor-overline">Repayments</span></Column>
                  </Row>
                  <Row>
                    <Column col={4}>
                      <p className="manor-body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua.
                      </p>
                    </Column>
                    <Column col={2}>
                      <p>7.5%</p>
                    </Column>
                    <Column col={2}>
                      <p>5.0%</p>
                    </Column>
                    <Column col={2}>
                      <p>$40.00</p>
                    </Column>
                    <Column col={2}>
                      <p>$599.00</p>
                    </Column>
                  </Row>

                </Container>
              </Column>
              <Column col={3}>
                <div style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <Button id="a" btnType="primary" content="Go to site" />
                  <Button id="a" btnType="link" content="More info" />
                </div>
              </Column>
            </Row>
          </div>
        </Container>
      </Card>
      <Card id="c">
        <Container>
          <div style={{ padding: '3rem 0rem', width: '100%' }}>
            <Row>
              <Column col={9}>
                <Container>
                  <Row>
                    <Column col={4}><h5>Test Product C</h5></Column>
                    <Column col={2}><span className="manor-overline">Advertised rate</span></Column>
                    <Column col={2}><span className="manor-overline">Comparison rate</span></Column>
                    <Column col={2}><span className="manor-overline">Fees</span></Column>
                    <Column col={2}><span className="manor-overline">Repayments</span></Column>
                  </Row>
                  <Row>
                    <Column col={4}>
                      <p className="manor-body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua.
                      </p>
                    </Column>
                    <Column col={2}>
                      <p>4.06%</p>
                    </Column>
                    <Column col={2}>
                      <p>5.2%</p>
                    </Column>
                    <Column col={2}>
                      <p>$75.00</p>
                    </Column>
                    <Column col={2}>
                      <p>$10.00</p>
                    </Column>
                  </Row>

                </Container>
              </Column>
              <Column col={3}>
                <div style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <Button id="a" btnType="primary" content="Go to site" />
                  <Button id="a" btnType="link" content="More info" />
                </div>
              </Column>
            </Row>
          </div>
        </Container>
      </Card>
    </CardGroup>
  </StoryTemplate>
);

export default CardResultsView;
