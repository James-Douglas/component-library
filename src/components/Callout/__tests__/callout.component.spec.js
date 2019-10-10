import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Callout from '../Callout.component';


describe('Callout()', () => {
  it('Callout renders without props', () => {
    const { getByText, container } = render(<Callout>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    const colloutLine = container.querySelector('.callout');
    expect(colloutLine).toHaveClass('info');
    expect(getByText('The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.')).toBeInTheDocument();
  });
});

