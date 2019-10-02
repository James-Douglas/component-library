import React from 'react';
import { render } from '@testing-library/react';
import StickyBar from '../StickyBar.component';

describe('StickyBar', () => {
  it('renders correctly with value as string', () => {
    const { getByText } = render(<StickyBar value="60" />);
    expect(getByText('60%')).toBeInTheDocument();
  });
  it('renders correctly with value as number', () => {
    const { getByText } = render(<StickyBar value={60} />);
    expect(getByText('60%')).toBeInTheDocument();
  });
});
