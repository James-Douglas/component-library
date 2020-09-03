import React from 'react';
import { render } from '../../../testUtils';
import 'jest-styled-components';
import Switch from '../Switch.component';

describe('Switch', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Switch />);
    expect(container).toBeDefined();
  });

  it('renders with label', () => {
    const { container, getByText } = render(<Switch label="This is a test" />);
    expect(container).toBeDefined();
    expect(getByText('This is a test')).toBeDefined();
  });

  it('renders with validation error', () => {
    const { getByText } = render(<Switch validationMessage="This is required" />);
    expect(getByText('This is required')).toBeDefined();
  });

  it('renders checked', () => {
    const { container } = render(<Switch checked />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('checked', '');
  });

  it('renders disabled', () => {
    const { container } = render(<Switch disabled />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('disabled', '');
  });
});
