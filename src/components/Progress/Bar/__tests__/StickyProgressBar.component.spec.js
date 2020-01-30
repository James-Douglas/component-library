import React from 'react';
import { render } from '../../../../testUtils';
import StickyProgressBar from '../StickyProgressBar.component';

describe('StickyProgressBar', () => {
  it('renders correctly with value as string', () => {
    const { getByText } = render(<StickyProgressBar value="60" />);
    expect(getByText('60%')).toBeInTheDocument();
  });
  it('renders correctly with value as number', () => {
    const { getByText } = render(<StickyProgressBar value={60} />);
    expect(getByText('60%')).toBeInTheDocument();
  });
});
