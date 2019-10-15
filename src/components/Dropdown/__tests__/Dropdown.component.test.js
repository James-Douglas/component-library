import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../Dropdown.component';

describe('Dropdown', () => {
  const options = [
    { value: 'First', title: 'First Item - Title' },
    { value: 'Second', title: 'Second Item - Title' },
    { value: 'Third', title: 'Third Item - Title', disabled: true },
  ];
  const defaultOption = {
    hasDefaultOption: true,
    value: 'default',
    disabled: false,
    hidden: false,
  };
  const defaultOptionWithTitle = {
    hasDefaultOption: true,
    value: 'default',
    disabled: false,
    hidden: false,
    title: 'Please choose',
  };
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
  });
  it('renders with invalid props', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" invalid autofill jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
    expect(dropdown).toHaveClass('invalid');
    expect(dropdown).toHaveClass('manor-prefilled');
  });
  it('renders with disabled attribute', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" disabled autofill jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
    expect(dropdown).toHaveAttribute('disabled');
  });
  it('renders with required attribute', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" required autofill jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
    expect(dropdown).toHaveAttribute('required');
  });
  it('renders with handleClick', () => {
    const selectedValue = 'Second';
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
    dropdown.value = selectedValue;
    fireEvent.change(dropdown);
    expect(dropdown.value).toBe(selectedValue);
  });
  it('renders  with defaultOptions', () => {
    const { container, getByText } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" defaultOption={defaultOption} jsx="true" />);
    const dropdownOptions = container.getElementsByTagName('option');
    const dropdownOptionsCount = dropdownOptions.length;
    expect(getByText('Please Select...')).toBeInTheDocument();
    expect(dropdownOptionsCount).toBe(options.length + 1);
  });
  it('renders  with defaultOptionWithTitle', () => {
    const { getByText } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" defaultOption={defaultOptionWithTitle} jsx="true" />);
    expect(getByText('Please choose')).toBeInTheDocument();
  });
  it('on input, set value func is called', () => {
    const getValueCb = jest.fn();
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" defaultOption={defaultOption} onChange={getValueCb} jsx="true" />);

    const dropdownField = container.querySelector('select');
    fireEvent.change(dropdownField, { target: { value: 'default' } });

    expect(dropdownField).toHaveValue('default');
    expect(getValueCb).toBeCalled();
  });
  it('renders  option with id', () => {
    const { getByText } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" defaultOption={defaultOptionWithTitle} jsx="true" />);
    expect(getByText('First Item - Title')).toHaveAttribute('id');
  });
  it('renders with supportingElements props', () => {
    const { getByText } = render(<Dropdown id="dropdown" options={options} label="Dropdown Label" defaultOption={defaultOptionWithTitle} jsx="true" supportingElements />);
    expect(getByText('OPTIONAL')).toBeInTheDocument();
  });
});
