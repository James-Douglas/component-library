import React from 'react';
import { render } from '../../../testUtils';
import Card from '../Card.component';

describe('Card', () => {
  it('renders', () => {
    const { container } = render(<Card id="card-one" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with margin', () => {
    const { container } = render(<Card id="card-one" margin={['4', '8', '12', '16']} />);

    const card = container.querySelector('[id="card-one"]');
    expect(card).toHaveStyle('margin: 0.4rem 0.8rem 1.2rem 1.6rem');
  });

  it('renders with padding', () => {
    const { container } = render(<Card id="card-one" padding={['4', '8', '12', '16']} />);

    const card = container.querySelector('[id="card-one"]');
    expect(card).toHaveStyle('padding: 0.4rem 0.8rem 1.2rem 1.6rem');
  });

  it('renders with margin and padding', () => {
    const { container } = render(<Card id="card-one" margin={['4', '8', '12', '16']} padding={['8', '8', '8', '4']} />);

    const card = container.querySelector('[id="card-one"]');
    expect(card).toHaveStyle('margin: 0.4rem 0.8rem 1.2rem 1.6rem');
    expect(card).toHaveStyle('padding: 0.8rem 0.8rem 0.8rem 0.4rem');
  });

  it('renders with box-shadow', () => {
    const { container } = render(<Card id="card-one" boxShadow={false} />);

    const card = container.querySelector('[id="card-one"]');
    expect(card).toHaveStyle('box-shadow: none');
  });

  it('renders without box-shadow', () => {
    const { container } = render(<Card id="card-one" />);

    const card = container.querySelector('[id="card-one"]');
    expect(card).not.toHaveStyle('box-shadow: none');
  });
});
