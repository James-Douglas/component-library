import React from 'react';
import { render } from '@testing-library/react';
import ProgressIcon from '../Icon.component';

describe('ProgressIcon', () => {
  it('renders correctly without props', () => {
    const { getByText } = render(<ProgressIcon />);
    expect(getByText('1')).toBeInTheDocument();
  });
  it('renders correctly for disabled prop', () => {
    const { getByText } = render(<ProgressIcon index={4} disabled />);
    expect(getByText('4')).toHaveClass('disabled');
  });
  it('renders correctly for active prop', () => {
    const { getByText } = render(<ProgressIcon index={4} active />);
    expect(getByText('4')).toHaveClass('active');
  });
  it('renders correctly for mobile prop', () => {
    const { getByText } = render(<ProgressIcon index={4} mobile />);
    expect(getByText('4')).not.toHaveClass('mobile');
  });
});
