import React from 'react';
import 'jest-styled-components';
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
  const optionsSelected = [
    { value: 'Default', title: 'Default Item - Title' },
    { value: 'First', title: 'First Item - Title' },
    { value: 'Second', title: 'Second Item - Title', selected: true },
    { value: 'Third', title: 'Third Item - Title', disabled: true },
  ];
  const optionsDefault = [
    { value: 'Default', title: 'Default Item - Title' },
    { value: 'First', title: 'First Item - Title' },
    { value: 'Second', title: 'Second Item - Title' },
    { value: 'Third', title: 'Third Item - Title', disabled: true },
  ];
  it('renders with minimal props', () => {
    // const mockTestClick = jest.fn();
    const selectedValue = 'Second';
    const { container, getByText } = render(<Dropdown id="dropdown-one" value={selectedValue} options={optionsSelected} label="Dropdown Label" bordered />);
    // test label
    expect(getByText('Dropdown Label')).toBeInTheDocument();
    // test options count
    const dropdownOptions = container.getElementsByTagName('option');
    const dropdownOptionsCount = dropdownOptions.length;
    expect(dropdownOptionsCount).toBe(optionsSelected.length);
    // test selected value
    const dropdown = container.getElementsByTagName('select')[0];
    const dropdownValue = dropdown.value;
    expect(dropdownValue).toBe(selectedValue);
    // test disabled options
    for (let index = 0; index < dropdownOptionsCount; index += 1) {
      expect(dropdownOptions[index].disabled).toBe(Boolean(optionsSelected[index].disabled));
    }
  });
  it('renders with Chevron up', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsSelected} label="Dropdown Label" bordered />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('data-icon', 'chevron-up');
  });
  it('renders with Chevron down', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsSelected} label="Dropdown Label" />);
    const selectField = container.querySelector('select');
    selectField.focus();
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('data-icon', 'chevron-down');
    selectField.blur();
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('data-icon', 'chevron-up');
  });
  it('renders with default props', () => {
    const selectedValue = 'Default';
    const { container } = render(<Dropdown id="dropdown-one" value={selectedValue} options={optionsDefault} label="Dropdown Label" bordered />);
    const dropdown = container.getElementsByTagName('select')[0];
    const dropdownValue = dropdown.value;
    expect(dropdownValue).toBe(selectedValue);
  });
  it('renders with disabled attribute', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" disabled autofill />);
    const dropdown = container.getElementsByTagName('select')[0];
    expect(dropdown).toHaveAttribute('disabled');
  });
  it('renders with required attribute', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" required autofill />);
    const dropdown = container.getElementsByTagName('select')[0];
    expect(dropdown).toHaveAttribute('required');
  });
  it('renders with handleClick', () => {
    const selectedValue = 'First';
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" />);
    const dropdown = container.getElementsByTagName('select')[0];
    dropdown.value = selectedValue;
    fireEvent.change(dropdown);
    expect(dropdown.value).toBe(selectedValue);
  });
  it('renders  with defaultOptions', () => {
    const { container, getByText } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" />);
    const dropdownOptions = container.getElementsByTagName('option');
    const dropdownOptionsCount = dropdownOptions.length;
    expect(getByText('Default Item - Title')).toBeInTheDocument();
    expect(dropdownOptionsCount).toBe(optionsDefault.length);
  });
  it('on input, set value func is called', () => {
    const getValueCb = jest.fn();
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" onChange={getValueCb} />);
    const dropdownField = container.querySelector('select');
    fireEvent.change(dropdownField, { target: { value: 'Default' } });
    expect(dropdownField).toHaveValue('Default');
    expect(getValueCb).toBeCalled();
  });
  it('renders  option with id', () => {
    const { getByText } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" />);
    expect(getByText('First Item - Title')).toHaveAttribute('id');
  });
  it('renders  option with prefix', () => {
    const { container, getByText } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" prefixContent="$" />);
    const optionItem = container.querySelector('[tabIndex="-1"]');

    expect(optionItem).toHaveStyleRule('padding-right: 2rem');
    expect(optionItem).toHaveStyleRule('padding-left: 2rem');
    expect(getByText('$')).toBeInTheDocument();
  });
  it('renders with supportingElements props', () => {
    const { getByText } = render(<Dropdown id="dropdown" options={optionsDefault} label="Dropdown Label" />);
    expect(getByText('OPTIONAL')).toBeInTheDocument();
  });
  it('renders  with validation message', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" validationMessage="sdfsdfsdfsdfsdf" />);
    const errorMessage = container.querySelector('p');
    expect(errorMessage).toHaveStyleRule('background: 1px solid red');
  });
});
