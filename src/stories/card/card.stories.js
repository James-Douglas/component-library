import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import Card from '../../components/Card/Card.component';
import CardGroup from '../../components/Card/CardGroup.component';
import Container from '../../components/Grid/Container/Container.component';
import CardResultsView from './cardResults.view';

const cards = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
  'twenty-six',
  'twenty-seven',
  'twenty-eight',
  'twenty-nine',
  'thirty',
  'thirty-one',
  'thirty-two',
];

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('Single card', () => <Container><Card id='test-card-id'>this is a test</Card></Container>, {})
  .add('Card Group', () => {
    const cols = number('Cols', 1, {
      range: true, min: 1, max: 6, step: 1,
    });
    return (
      <CardGroup cols={cols} id={'test a'}>
        {/* eslint-disable-next-line react/jsx-key */}
        {cards.map((card) => <Card id={`card-${card}`} key={`card-${card}-kay`}><div className="flex w-full h-full items-center justify-center"><h2>{card}</h2></div></Card>)}
      </CardGroup>
    );
  })
  .add('Mock results', () => {
    const background = select('Background', { White: 'white', Grey: 'grey' }, 'white');
    return <CardResultsView background={background} />;
  });
