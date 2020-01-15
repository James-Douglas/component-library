import React from 'react';
import { render } from '@testing-library/react';
import Callout from '../Callout.component';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

describe('Callout()', () => {
  it('Callout renders without props', () => {
    const { getByText } = render(<Callout>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    expect(getByText('The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.')).toBeInTheDocument();
  });

  it('Callout renders with correct style props', () => {
    const { container } = render(<Callout>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.fontSize.base}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.callout.background}`);
  });

  it('Callout renders with grey background', () => {
    const { container } = render(<Callout bgColorGrey>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Callout>);
    expect(container.firstChild).toHaveStyle(`background: ${theme.callout.backgroundGrey}`);
  });
});
