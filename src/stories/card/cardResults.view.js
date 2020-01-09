import React, { useState } from 'react';
import styled from 'styled-components';
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


const StyledManorOverline = styled.span`
  line-height: 1.4;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  font-weight: 600;
  color: #787673;
`;


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
        <div style={{ padding: '3rem 0rem', width: '100%', fontSize: '1.4rem' }}>
          <Row>
            <div style={{
              display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem',
            }}
            >
              <h6>{card.name}</h6>
            </div>
          </Row>
          <Row>
            <Column offset={2} cols={8}>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
              </p>
            </Column>
          </Row>
          <Row>
            <Column offset={2} cols={4}><StyledManorOverline>Advertised rate</StyledManorOverline></Column>
            <Column cols={4}><StyledManorOverline>Comparison rate</StyledManorOverline></Column>
          </Row>
          <Row>
            <Column offset={2} cols={4}><p>{card.advRate}</p></Column>
            <Column cols={4}><p>{card.compRate}</p></Column>
          </Row>
          <Row>
            <Column offset={2} cols={4}><StyledManorOverline>Fees</StyledManorOverline></Column>
            <Column cols={4}><StyledManorOverline>Repayments</StyledManorOverline></Column>
          </Row>
          <Row>
            <Column offset={2} cols={4}><p>{card.fees}</p></Column>
            <Column cols={4}><p>{card.repayments}</p></Column>
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
                  <Column cols={4}><h6>{card.name}</h6></Column>
                  <Column cols={2}><StyledManorOverline>Advertised rate</StyledManorOverline></Column>
                  <Column cols={2}><StyledManorOverline>Comparison rate</StyledManorOverline></Column>
                  <Column cols={2}><StyledManorOverline>Fees</StyledManorOverline></Column>
                  <Column cols={2}><StyledManorOverline>Repayments</StyledManorOverline></Column>
                </Row>
                <Row>
                  <Column cols={4}>
                    <p style={{ paddingRight: '7rem' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                  </Column>
                  <Column cols={2}>
                    <p>{card.advRate}</p>
                  </Column>
                  <Column cols={2}>
                    <p>{card.compRate}</p>
                  </Column>
                  <Column cols={2}>
                    <p>{card.fees}</p>
                  </Column>
                  <Column cols={2}>
                    <p>{card.repayments}</p>
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
    <StoryTemplate background={background}>
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
    </StoryTemplate>
  );
};
export default CardResultsView;
