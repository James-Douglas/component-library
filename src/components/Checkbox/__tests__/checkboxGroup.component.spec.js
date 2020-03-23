import React from 'react';
import { render, fireEvent } from '../../../testUtils';
import CheckboxGroup, { generateGroup } from '../CheckboxGroup.component';
import Checkbox from '../Checkbox.component';
import theme from '../../../themes/ctm.theme';

describe('generateGroup', () => {
  // eslint-disable-next-line react/prop-types
  const GroupContainer = ({ colSize, children }) => (
    <>
      {generateGroup(colSize, children, null, [])}
    </>
  );

  it('does not render children if there are none', () => {
    const { container } = render(<GroupContainer />);
    expect(container).toBeEmpty();
  });

  it('renders if there are children', () => {
    const { container } = render(
      <GroupContainer colSize="6">
        <Checkbox id="A-1" label="A-1 check" />
        <Checkbox id="A-2" label="A-2 check" />
      </GroupContainer>,
    );
    const allLabel = container.querySelectorAll('label');
    expect(allLabel.length).toBe(2);
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('CheckboxGroup.component', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <CheckboxGroup label="test" groupId="test-group-id">
        <Checkbox id="A-1"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" handleChange={mockTestClick}>
        <Checkbox id="A-1"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const checkboxGroup = container.querySelector('#test-group-id');
    const chkA1 = container.querySelector('label[for="A-1"]');
    const chkA1Style = chkA1.firstChild;
    const inputId = container.querySelector('#A-1');

    fireEvent.click(chkA1, { button: 0 });
    expect(checkboxGroup.id).toBe('test-group-id');
    expect(chkA1Style).toHaveStyle(`background: ${theme.checkbox.backgroundChecked}`);
    expect(chkA1.getAttribute('disabled')).toBe(null);
    expect(chkA1.getElementsByTagName('svg')).toBeDefined();
    expect(mockTestClick).toHaveBeenCalled();
    expect(inputId.checked).toBe(true);
    fireEvent.click(chkA1, { button: 0 });
    expect(inputId.checked).toBe(false);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('checks on click', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" handleClick={mockTestClick}>
        <Checkbox id="A-1"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const chkA1Input = container.querySelector('#A-1');

    const chkA1Label = container.querySelector('label[for="A-1"]');
    fireEvent.click(chkA1Label, { button: 0 });

    expect(chkA1Input.checked).toBe(true);
  });

  it('accepts a prefill value', () => {
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" selected={['A-1', 'A-3']}>
        <Checkbox id="A-1"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3"><p>A-3 check</p></Checkbox>
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
        <Checkbox id="A-1"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3" disabled><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );

    const chkA3Input = container.querySelector('#A-3');

    const chkA3Label = container.querySelector('label[for="A-3"]');
    fireEvent.click(chkA3Label, { button: 0 });

    expect(chkA3Input.checked).toBe(false);
  });

  it('render with prop tooltip', () => {
    const tooltip = {
      title: 'Tooltip heading',
      body: 'Prefix and suffix view',
    };
    const { container } = render(
      <CheckboxGroup groupId="test-group-id" colSize="5" tooltip={tooltip}>
        <Checkbox id="A-1"><p>A-1 check</p></Checkbox>
        <Checkbox id="A-2"><p>A-2 check</p></Checkbox>
        <Checkbox id="A-3"><p>A-3 check</p></Checkbox>
      </CheckboxGroup>,
    );
    const tooltipExist = container.querySelector(' div[role="tooltip"]');
    expect(tooltipExist).toBeInTheDocument();
  });
});
