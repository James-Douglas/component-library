import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card.component';

describe('Card', () => {
  it('renders', () => {
    const { container } = render(<Card id="card-one" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
