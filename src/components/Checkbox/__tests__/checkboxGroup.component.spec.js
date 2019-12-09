import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxGroup, { generateGroup } from '../CheckboxGroup.component';
import Checkbox from '../Checkbox.component';

describe('generateGroup', () => {
  // eslint-disable-next-line react/prop-types
  const GroupContainer = ({ colSize, children }) => (
    <>
      {generateGroup(colSize, children)}
    </>
  );

  it('does not render children if there are none', () => {
    const { container } = render(<GroupContainer />);
    expect(container).toBeEmpty();
  });

  it('renders if there are children', () => {
    const { container } = render(
      <GroupContainer colSize="6">
        <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
      </GroupContainer>,
    );

    const allLabel = container.querySelectorAll('label');
    const content = container.querySelectorAll('.checkbox-content');
    expect(content).toBeDefined();
    expect(allLabel.length).toBe(2);
    expect(content.length).toBe(2);
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('CheckboxGroup.component', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <CheckboxGroup label="test" groupId="test-group-id">
        <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3" icon="check"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const mockTestClick = jest.fn();
    const { container, getByText } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" handleChange={mockTestClick} disableFieldset>
        <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3" icon="check"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const checkboxGroup = container.querySelector('#test-group-id');
    const chkA1 = container.querySelector('label[for="A-1"]');
    const label = container.querySelector('label');
    const chkA1Style = label.firstChild;
    fireEvent.click(chkA1, { button: 0 });

    expect(checkboxGroup.id).toBe('test-group-id');
    expect(chkA1Style).toHaveStyle('background: #001443'); // darkBlue from theme.js
    expect(chkA1.getAttribute('disabled')).toBe(null);
    expect(chkA1.getElementsByTagName('svg')).toBeDefined();
    expect(mockTestClick).toHaveBeenCalled();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('checks on click', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" handleClick={mockTestClick}>
        <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3" icon="check"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const chkA1Input = container.querySelector('#A-1');

    const chkA1Label = container.querySelector('label[for="A-1"]');
    fireEvent.click(chkA1Label, { button: 0 });

    expect(chkA1Input.checked).toBe(true);
  });

  it('accepts a prefill value', () => {
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5">
        <Checkbox id="A-1" icon="check" isSelected><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3" icon="check" isSelected><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const checkboxA1 = container.querySelector('#A-1');
    const checkboxA2 = container.querySelector('#A-2');
    const checkboxA3 = container.querySelector('#A-3');
    expect(checkboxA1.checked).toBe(true);
    expect(checkboxA2.checked).toBe(false);
    expect(checkboxA3.checked).toBe(true);
  });

  it('does not check when disabled', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" handleClick={mockTestClick}>
        <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3" icon="check" disabled><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const chkA3Input = container.querySelector('#A-3');

    const chkA3Label = container.querySelector('label[for="A-3"]');
    fireEvent.click(chkA3Label, { button: 0 });

    expect(chkA3Input.checked).toBe(false);
  });
});
