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
    expect(card.parentElement).toHaveStyle('width: 100%');
  });
  it('renders wtih cards in 2 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={2}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 50%');
  });
  it('renders wtih cards in 3 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={3}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 33.333333333333336%');
  });
  it('renders wtih cards in 4 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={4}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 25%');
  });
  it('renders wtih cards in 6 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={6}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 16.666666666666668%');
  });
  it('renders wtih cards in 7 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={7}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 14.285714285714286%');
  });
  it('renders wtih cards in 8 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={8}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 12.5%');
  });
  it('renders wtih cards in 9 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={9}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 11.11111111111111%');
  });
  it('renders wtih cards in 10 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={10}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 10%');
  });
  it('renders wtih cards in 11 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={11}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 9.090909090909092%');
  });
  it('renders wtih cards in 12 col layout', () => {
    const { container } = render(
      <CardGroup id="test" cols={12}>
        <Card />
        <Card />
      </CardGroup>,
    );
    const card = container.querySelector('.card');
    expect(card.parentElement).toHaveStyle('width: 8.333333333333334%');
  });
});
