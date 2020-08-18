import React from 'react';
import { render } from '../../../testUtils';
import 'jest-styled-components';
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
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="1"]');
    expect(card[0]).toHaveStyle('width: 100%');
    expect(card[1]).toHaveStyle('width: 100%');
  });

  it('renders with cards in 2 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={2}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="2"]');
    expect(card[0]).toHaveStyle('width: 50%');
    expect(card[1]).toHaveStyle('width: 50%');
  });

  it('renders with cards in 3 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={3}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="3"]');
    expect(card[0]).toHaveStyle('width: 33.333333333333336%');
    expect(card[1]).toHaveStyle('width: 33.333333333333336%');
  });

  it('renders with cards in 4 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={4}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="4"]');
    expect(card[0]).toHaveStyle('width: 25%');
    expect(card[1]).toHaveStyle('width: 25%');
  });

  it('renders with cards in 6 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={6}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="6"]');
    expect(card[0]).toHaveStyle('width: 16.666666666666668%');
    expect(card[1]).toHaveStyle('width: 16.666666666666668%');
  });

  it('renders with cards in 7 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={7}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="7"]');
    expect(card[0]).toHaveStyle('width: 14.285714285714286%');
    expect(card[1]).toHaveStyle('width: 14.285714285714286%');
  });

  it('renders with cards in 8 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={8}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="8"]');
    expect(card[0]).toHaveStyle('width: 12.5%');
    expect(card[1]).toHaveStyle('width: 12.5%');
  });

  it('renders with cards in 9 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={9}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="9"]');
    expect(card[0]).toHaveStyle('width: 11.11111111111111%');
    expect(card[1]).toHaveStyle('width: 11.11111111111111%');
  });

  it('renders with cards in 10 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={10}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="10"]');
    expect(card[0]).toHaveStyle('width: 10%');
    expect(card[1]).toHaveStyle('width: 10%');
  });

  it('renders with cards in 11 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={11}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="11"]');
    expect(card[0]).toHaveStyle('width: 9.090909090909092%');
    expect(card[1]).toHaveStyle('width: 9.090909090909092%');
  });

  it('renders with cards in 12 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={12}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card = container.querySelectorAll('[cols="12"]');
    expect(card[0]).toHaveStyle('width: 8.333333333333334%');
    expect(card[1]).toHaveStyle('width: 8.333333333333334%');
  });

  it('renders with cards that have margin', () => {
    const margin = ['12', '4', '4', '12'];
    const { container } = render(
      <CardGroup id="test" cols={12} cardProps={{ margin }}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card1 = container.querySelector('[id="c1"]');
    const card2 = container.querySelector('[id="c2"]');
    expect(card1).toHaveStyle('margin: 1.2rem 0.4rem 0.4rem 1.2rem');
    expect(card2).toHaveStyle('margin: 1.2rem 0.4rem 0.4rem 1.2rem');
  });

  it('renders with cards that have padding', () => {
    const padding = ['0', '4', '8', '12'];
    const { container } = render(
      <CardGroup id="test" cols={12} cardProps={{ padding }}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card1 = container.querySelector('[id="c1"]');
    const card2 = container.querySelector('[id="c2"]');
    expect(card1).toHaveStyle('padding: 0px 0.4rem 0.8rem 1.2rem');
    expect(card2).toHaveStyle('padding: 0px 0.4rem 0.8rem 1.2rem');
  });

  it('renders with cards that have margin and padding', () => {
    const padding = ['4', '4', '8', '12'];
    const margin = ['8', '8', '16', '24'];
    const { container } = render(
      <CardGroup id="test" cols={12} cardProps={{ padding, margin }}>
        <Card id="c1" />
        <Card id="c2" />
      </CardGroup>,
    );
    const card1 = container.querySelector('[id="c1"]');
    const card2 = container.querySelector('[id="c2"]');
    expect(card1).toHaveStyle('padding: 0.4rem 0.4rem 0.8rem 1.2rem');
    expect(card1).toHaveStyle('margin: 0.8rem 0.8rem 1.6rem 2.4rem');
    expect(card2).toHaveStyle('padding: 0.4rem 0.4rem 0.8rem 1.2rem');
    expect(card2).toHaveStyle('margin: 0.8rem 0.8rem 1.6rem 2.4rem');
  });
});
