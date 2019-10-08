import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '../Accordion.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText } = render(<Accordion />);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });
});
