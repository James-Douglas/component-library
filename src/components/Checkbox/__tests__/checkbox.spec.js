import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox.component';

describe('Checkbox', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Checkbox id="test-id" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <Checkbox
        id="test-id"
        icon="check"
        disabled={false}
        invertColour
        handleClick={mockTestClick}
      >
        <p>child content</p>
      </Checkbox>,
    );

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');
    const labelStyle = container.querySelector('.manor-checkbox');

    fireEvent.click(label, { button: 0 });

    expect(mockTestClick).toHaveBeenCalled();
    expect(labelStyle.classList).toContain('inverted');
    expect(checkbox.getAttribute('disabled')).toBe(null);
    expect(container.querySelector('#child-content')).toBeDefined();
    expect(container.getElementsByTagName('svg')).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('checks on click', () => {
    const { container } = render(<Checkbox id="test-id" icon="check" disabled={false} invertColour />);

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');

    fireEvent.click(label, { button: 0 });

    expect(checkbox.checked).toBe(true);
  });

  it('click is disabled when disabled prop is supplied', () => {
    const { container } = render(<Checkbox id="test-id" icon="check" disabled />);

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');

    fireEvent.click(label, { button: 0 });

    expect(checkbox.checked).toBe(false);
  });
});
