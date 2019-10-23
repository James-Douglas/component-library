import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card.component';
import CardGroup from '../CardGroup.component';

describe('CardGroup', () => {
  it('renders with minimal props', () => {
    const { container } = render(<CardGroup id="test" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders with cards in 1 col layout', () => {
    const { container } = render(
      <CardGroup id="test">
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveClass('col-12');
  });
  it('renders wtih cards in 2 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={2}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveClass('col-6');
  });
  it('renders wtih cards in 3 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={3}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveClass('col-4');
  });
  it('renders wtih cards in 4 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={4}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveClass('col-3');
  });
  it('renders wtih cards in 6 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={6}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveClass('col-2');
  });
});
