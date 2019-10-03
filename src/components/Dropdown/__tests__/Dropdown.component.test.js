import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../Dropdown.component';
import CheckboxGroup from '../../Checkbox/CheckboxGroup.component';
import Checkbox from '../../Checkbox/Checkbox.component';

describe('Dropdown', () => {
  const options = [
    { value: 'First', title: 'First Item - Title' },
    { value: 'Second', title: 'Second Item - Title' },
    { value: 'Third', title: 'Third Item - Title', disabled: true },
  ];
  it('renders with minimal props', () => {
    // const mockTestClick = jest.fn();
    const selectedValue = 'Second';
    const { container, getByText } = render(<Dropdown id="dropdown-one" value={selectedValue} options={options} label="Dropdown Label" bordered jsx="true" />);

    // test label
    expect(getByText('Dropdown Label')).toBeInTheDocument();

    // test options count
    const dropdownOptions = container.getElementsByTagName('option');
    const dropdownOptionsCount = dropdownOptions.length;
    expect(dropdownOptionsCount).toBe(options.length);

    // test selected value
    const dropdown = container.getElementsByTagName('select')[0];
    const dropdownValue = dropdown.value;
    expect(dropdownValue).toBe(selectedValue);

    // test disabled options
    for (let index = 0; index < dropdownOptionsCount; index += 1) {
      expect(dropdownOptions[index].disabled).toBe(Boolean(options[index].disabled));
    }

    // test border class
    expect(dropdown).toHaveClass('manor-input-border');

    // TMP fail test
    // expect(getByText('Fail test')).toBeInTheDocument();
  });
  it('renders with invalid props', () => {
    const { container, getByText } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" invalid autofill jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
    expect(dropdown).toHaveClass('invalid');
    expect(dropdown).toHaveClass('manor-prefilled');
  });
});
