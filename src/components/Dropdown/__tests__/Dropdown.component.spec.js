import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown, { getSupportingElements } from '../Dropdown.component';

describe('getSupportingElements()', () => {
  // eslint-disable-next-line react/prop-types
  const SupportingElementsContainer = ({ required }) => (
    <>
      {getSupportingElements(required)}
    </>
  );
  it('returns null when required is true', () => {
    expect(getSupportingElements(true)).toBeNull();
  });
  it('returns OPTIONAL text when required is false', () => {
    const { getByText } = render(<SupportingElementsContainer />);
    expect(getByText('OPTIONAL')).toBeInTheDocument();
  });
});

describe('Dropdown', () => {
  const options = [
    { value: 'Default', title: 'Default Item - Title', defaultOption: true },
    { value: 'First', title: 'First Item - Title' },
    { value: 'Second', title: 'Second Item - Title', class: 'test-class' },
    { value: 'Third', title: 'Third Item - Title', disabled: true },
  ];
  it('renders with minimal props', () => {
    // const mockTestClick = jest.fn();
    const selectedValue = 'Second';
    const { container, getByText } = render(<Dropdown id="dropdown-one" value={selectedValue} options={options} label="Dropdown Label" bordered jsx="true" disableFieldset />);
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
  it('renders with field prefill props', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" validationMessage="invalid" prefillValue="First" jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
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
    const selectedValue = 'First';
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" jsx="true" />);
    const dropdown = container.getElementsByTagName('select')[0];
    dropdown.value = selectedValue;
    fireEvent.change(dropdown);
    expect(dropdown.value).toBe(selectedValue);
  });
  it('renders  with defaultOptions', () => {
    const { container, getByText } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" jsx="true" />);
    const dropdownOptions = container.getElementsByTagName('option');
    const dropdownOptionsCount = dropdownOptions.length;
    expect(getByText('Default Item - Title')).toBeInTheDocument();
    expect(dropdownOptionsCount).toBe(options.length);
  });
  it('on input, set value func is called', () => {
    const getValueCb = jest.fn();
    const { container } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" onChange={getValueCb} jsx="true" />);

    const dropdownField = container.querySelector('select');
    fireEvent.change(dropdownField, { target: { value: 'Default' } });

    expect(dropdownField).toHaveValue('Default');
    expect(getValueCb).toBeCalled();
  });
  it('renders  option with id', () => {
    const { getByText } = render(<Dropdown id="dropdown-one" options={options} label="Dropdown Label" jsx="true" />);
    expect(getByText('First Item - Title')).toHaveAttribute('id');
  });
  it('renders with supportingElements props', () => {
    const { getByText } = render(<Dropdown id="dropdown" options={options} label="Dropdown Label" jsx="true" disableFieldset />);
    expect(getByText('OPTIONAL')).toBeInTheDocument();
  });
  it('renders correct when focus and blur', () => {
    const { container } = render(<Dropdown id="dropdown" options={options} label="Dropdown Label" jsx="true" prefixContent="$" />);
    const prefixFieldWrap = container.querySelector('.with-prefix-field');
    const selectField = container.querySelector('select');
    selectField.focus();
    expect(prefixFieldWrap).toHaveClass('outline-select');
    selectField.blur();
    expect(prefixFieldWrap).not.toHaveClass('outline-select');
  });
});
