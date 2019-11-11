import React, { useState } from 'react';
import CardGroup from '../../components/Card/CardGroup.component';
import Card from '../../components/Card/Card.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import StoryTemplate from '../storyTemplate';
import Button from '../../components/Button/Button.component';


const cardData = [
  {
    id: 'a',
    name: 'Test Product A',
    advRate: '7.65%',
    compRate: '5.5%',
    fees: '$75.00',
    repayments: '$549.00',
  },
  {
    id: 'b',
    name: 'Test Product B',
    advRate: '7.25%',
    compRate: '5.75%',
    fees: '$54.00',
    repayments: '$575.00',
  },
  {
    id: 'c',
    name: 'Test Product C',
    advRate: '7.00%',
    compRate: '5.95%',
    fees: '$85.00',
    repayments: '$555.00',
  },
];

// eslint-disable-next-line react/prop-types
const CardResultsView = ({ background }) => {
  const [isGrid, setIsGrid] = useState(false);

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  const renderGridView = (cards) => cards.map((card, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Card id={card.id} key={`card-${i}`}>
      <Container>
        <div style={{ padding: '3rem 0rem', width: '100%' }}>
          <Row>
            <div style={{
              display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem',
            }}
            >
              <h5>{card.name}</h5>
            </div>
          </Row>
          <Row>
            <Column offset={2} col={8}>
              <p className="manor-body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
              </p>
            </Column>
          </Row>
          <Row>
            <Column col={6}><span className="manor-overline">Advertised rate</span></Column>
            <Column col={6}><span className="manor-overline">Comparison rate</span></Column>
          </Row>
          <Row>
            <Column col={6}><p>{card.advRate}</p></Column>
            <Column col={6}><p>{card.compRate}</p></Column>
          </Row>
          <Row>
            <Column col={6}><span className="manor-overline">Fees</span></Column>
            <Column col={6}><span className="manor-overline">Repayments</span></Column>
          </Row>
          <Row>
            <Column col={6}><p>{card.fees}</p></Column>
            <Column col={6}><p>{card.repayments}</p></Column>
          </Row>
          <Row>
            <div style={{
              display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center',
            }}
            >
              <Button id="a" type="primary" content="Go to site" />
            </div>
          </Row>
          <Row>
            <div style={{
              display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center',
            }}
            >
              <Button id="a" type="link" content="More info" />
            </div>
          </Row>
        </div>
      </Container>
    </Card>
  ));

  const renderListView = (cards) => cards.map((card, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Card id={card.id} key={`card-${i}`}>
      <Container>
        <div style={{ padding: '3rem 0rem', width: '100%' }}>
          <Row>
            <Column col={9}>
              <Container>
                <Row>
                  <Column col={4}><h5>{card.name}</h5></Column>
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
                    <p>{card.advRate}</p>
                  </Column>
                  <Column col={2}>
                    <p>{card.compRate}</p>
                  </Column>
                  <Column col={2}>
                    <p>{card.fees}</p>
                  </Column>
                  <Column col={2}>
                    <p>{card.repayments}</p>
                  </Column>
                </Row>

              </Container>
            </Column>
            <Column col={3}>
              <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              }}
              >
                <Button id="a" type="primary" content="Go to site" />
                <Button id="a" type="link" content="More info" />
              </div>
            </Column>
          </Row>
        </div>
      </Container>
    </Card>
  ));

  return (
    <StoryTemplate background={background}>
      <Container>
        <Row>
          <Column offset={10} col={2}>
            <Button id="toggle-button" type="secondary" content={`Toggle ${isGrid ? 'List' : 'Grid'}`} handleClick={toggleView} />
          </Column>
        </Row>
        <CardGroup id="test" cols={isGrid ? 3 : 1}>
          {isGrid ? renderGridView(cardData) : renderListView(cardData)}
        </CardGroup>
      </Container>
    </StoryTemplate>
  );
};
export default CardResultsView;
