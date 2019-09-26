import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxGroup from '../CheckboxGroup.component';

const checkboxes = [
  { id: 'A-1', icon: 'check', content: 'A-1 check' },
  { id: 'A-2', icon: 'check', content: 'A-2 check' },
  { id: 'A-3', icon: 'check', content: 'A-3 check' },
  { id: 'A-4', icon: 'check', content: 'A-4 check' },
  {
    id: 'A-5', icon: 'check', invertColour: true, content: 'A-5 check', disabled: true,
  },
  {
    id: 'A-6', icon: 'check', invertColour: true, content: 'A-6 check', disabled: true,
  },
];

/* checkboxesArr, colSize, groupId, handleClick, */
/*  checkbox.id checkbox.icon checkbox.invertColour checkbox.disabled */

describe('CheckboxGroup', () => {
  it('renders with minimal props', () => {
    const { container } = render(<CheckboxGroup groupId="test-group-id" checkboxesArr={checkboxes} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <CheckboxGroup
        groupId="test-group-id"
        checkboxesArr={checkboxes}
        colSize="5"
        handleClick={mockTestClick}
      />,
    );

    const checkboxGroup = container.querySelector('#test-group-id');
    const chkA1 = container.querySelector('label[for="A-1"]');

    fireEvent.click(chkA1, { button: 0 });

    expect(checkboxGroup.id).toBe('test-group-id');
    expect(chkA1.getAttribute('disabled')).toBe(null);
    expect(chkA1.getElementsByTagName('svg')).toBeDefined();
    expect(mockTestClick).toHaveBeenCalled();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('checks on click', () => {
    const { container } = render(<CheckboxGroup groupId="test-group-id" checkboxesArr={checkboxes} />);

    const chkA1Input = container.querySelector('#A-1');

    const chkA1Label = container.querySelector('label[for="A-1"]');
    fireEvent.click(chkA1Label, { button: 0 });

    expect(chkA1Input.checked).toBe(true);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('does not check when disabled', () => {
    const { container } = render(<CheckboxGroup groupId="test-group-id" checkboxesArr={checkboxes} />);

    const chkA6Input = container.querySelector('#A-6');

    const chkA6Label = container.querySelector('label[for="A-6"]');
    fireEvent.click(chkA6Label, { button: 0 });

    expect(chkA6Input.checked).toBe(false);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
