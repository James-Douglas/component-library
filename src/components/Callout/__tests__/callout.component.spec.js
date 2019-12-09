import React from 'react';
import { render } from '@testing-library/react';
import Callout from '../Callout.component';

describe('Callout()', () => {
  it('Callout renders without props', () => {
    const { getByText } = render(<Callout>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    expect(getByText('The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.')).toBeInTheDocument();
  });
  it('Callout renders with correct style props', () => {
    const { container } = render(<Callout>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    expect(container.firstChild).toHaveStyle('font-size: 1.6rem');
    expect(container.firstChild).toHaveStyle('background: rgb(255, 255, 255)');
  });

  it('Callout renders with grey background', () => {
    const { container } = render(<Callout bgColorGrey>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    expect(container.firstChild).toHaveStyle('background: rgb(248, 248, 248)');
  });
});
