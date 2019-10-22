import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox, { renderIcon } from '../Checkbox.component';

describe('renderIcon()', () => {
  // eslint-disable-next-line react/prop-types
  const IconContainer = ({ icon, toggle }) => (
    <>
      {renderIcon(icon, toggle)}
    </>
  );

  it('does not render an icon if toggle condition is not met', () => {
    const { container } = render(<IconContainer toggle={false} />);

    expect(container).toBeEmpty();
  });

  it('renders an icon when params are set (icon name and toggle is true)', () => {
    const { container } = render(<IconContainer icon="check" toggle />);

    const svg = container.querySelector('svg');

    expect(svg).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('Checkbox.component', () => {
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
        handleChange={mockTestClick}
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

  it('accepts a prefill value', () => {
    const { container } = render(
      <Checkbox
        id="test-id"
        icon="check"
        isSelected
      />,
    );

    const checkbox = container.querySelector('#test-id');
    expect(checkbox.checked).toBe(true);
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
