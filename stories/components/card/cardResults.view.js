import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardGroup } from '@comparethemarketau/manor-card';
import { Container, Row, Column } from '@comparethemarketau/manor-grid';
import { Button } from '@comparethemarketau/manor-button';
import { Typography } from '@comparethemarketau/manor-typography';

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


const CardResultsView = () => {
  const [isGrid, setIsGrid] = useState(false);

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  const renderGridView = (cards) => cards.map((card, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Card id={card.id} key={`card-${i}`}>
      <Container>
        <div style={{ padding: '3rem 0rem', width: '100%', fontSize: '1.4rem' }}>
          <Row>
            <div style={{
              display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem',
            }}
            >
              <Typography variant="h6">{card.name}</Typography>
            </div>
          </Row>
          <Row>
            <Column offset={2} cols={8}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </Typography>
            </Column>
          </Row>
          <Row>
            <Column offset={2} auto><Typography variant="caption">Advertised rate</Typography></Column>
            <Column><Typography variant="caption">Comparison rate</Typography></Column>
          </Row>
          <Row>
            <Column offset={2} auto><Typography variant="body2">{card.advRate}</Typography></Column>
            <Column><Typography variant="body2">{card.compRate}</Typography></Column>
          </Row>
          <Row>
            <Column offset={2} auto><Typography variant="caption">Fees</Typography></Column>
            <Column><Typography variant="caption">Repayments</Typography></Column>
          </Row>
          <Row>
            <Column offset={2} auto><Typography variant="body2">{card.fees}</Typography></Column>
            <Column><Typography variant="body2">{card.repayments}</Typography></Column>
          </Row>
          <Row>
            <Column offset={2} cols={8}>
              <div style={{
                display: 'flex', width: '100%', justifyContent: 'left', alignItems: 'center', marginTop: '2rem',
              }}
              >
                <Button id="a" variant="primary">
                  Go to site
                </Button>
              </div>
            </Column>
          </Row>
          <Row>
            <Column offset={2} cols={8}>
              <div style={{
                display: 'flex', width: '100%', justifyContent: 'left', alignItems: 'center',
              }}
              >
                <Button id="b" variant="primary">
                  More info
                </Button>
              </div>
            </Column>
          </Row>
        </div>
      </Container>
    </Card>
  ));

  const renderListView = (cards) => cards.map((card, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Card id={card.id} key={`card-${i}`}>
      <Container>
        <div style={{ padding: '3rem 0rem', width: '100%', fontSize: '1.4rem' }}>
          <Row>
            <Column cols={9}>
              <Container>
                <Row>
                  <Column cols={4}><Typography variant="h6">{card.name}</Typography></Column>
                  <Column><Typography variant="caption">Advertised rate</Typography></Column>
                  <Column><Typography variant="caption">Comparison rate</Typography></Column>
                  <Column><Typography variant="caption">Fees</Typography></Column>
                  <Column><Typography variant="caption">Repayments</Typography></Column>
                </Row>
                <Row>
                  <Column cols={4}>
                    <div style={{paddingRight: '7rem'}}>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                      </Typography>
                    </div>
                  </Column>
                  <Column>
                    <Typography variant="body2">{card.advRate}</Typography>
                  </Column>
                  <Column>
                    <Typography variant="body2">{card.compRate}</Typography>
                  </Column>
                  <Column>
                    <Typography variant="body2">{card.fees}</Typography>
                  </Column>
                  <Column>
                    <Typography variant="body2">{card.repayments}</Typography>
                  </Column>
                </Row>

              </Container>
            </Column>
            <Column cols={3}>
              <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center', marginTop: '2rem',
              }}
              >
                <Button id="a" variant="primary">
                  Go to site
                </Button>
                <Button id="a" variant="primary">
                  More info
                </Button>
              </div>
            </Column>
          </Row>
        </div>
      </Container>
    </Card>
  ));

  return (
    <Container>
      <Row>
        <Column offset={10} cols={2}>
          <Button id="toggle-button" variant="secondary" handleClick={toggleView}>
            {`Toggle ${isGrid ? 'List' : 'Grid'}`}
          </Button>
        </Column>
      </Row>
      <CardGroup id="test" cols={isGrid ? 3 : 1}>
        {isGrid ? renderGridView(cardData) : renderListView(cardData)}
      </CardGroup>
    </Container>
  );
};
export default CardResultsView;
