import React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../Dropdown.component';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

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

  it('renders with Chevron', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsSelected} label="Dropdown Label" />);
    const selectField = container.querySelector('select');
    selectField.focus();
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('data-icon', 'chevron-down');
    selectField.blur();
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

    expect(optionItem).toHaveStyleRule('padding-right', theme.spacing[20]);
    expect(optionItem).toHaveStyleRule('padding-left', theme.spacing[20]);
    expect(getByText('$')).toBeInTheDocument();
  });

  it('renders with supportingElements props', () => {
    const { getByText } = render(<Dropdown id="dropdown" options={optionsDefault} label="Dropdown Label" />);
    expect(getByText('Optional')).toBeInTheDocument();
  });

  it('renders dropdown without options', () => {
    const { getByText, container } = render(<Dropdown id="dropdown-one" label="Dropdown Label" validationMessage="No options" options={[]} />);
    const selectHtml = container.querySelector('select');
    expect(getByText('No options')).toBeInTheDocument();
    expect(selectHtml).toHaveStyleRule('border', theme.borders.invalid);
  });

  it('renders select with border by default', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" />);
    const selectHtml = container.querySelector('select');
    expect(selectHtml).toHaveStyleRule('border', theme.borders.component);
  });

  it('renders select without border', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsDefault} label="Dropdown Label" bordered={false} />);
    const selectHtml = container.querySelector('select');
    expect(selectHtml.value).toBe('Default');
    expect(selectHtml.value).not.toBe('Second');
    expect(selectHtml).toHaveStyleRule('border', theme.borders.transparent);
  });

  it('renders select active', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsSelected} label="Dropdown Label" prefixContent="$" />);
    const selectHtml = container.querySelectorAll('.row')[1];
    const selectFocus = selectHtml.firstChild.firstChild;
    const selectField = container.querySelector('#dropdown-one');
    expect(selectField.value).toBe('Second');
    selectField.focus();
    expect(selectFocus).toHaveStyleRule('border', theme.borders.hover);
  });

  it('render with prop forceFullWidth', () => {
    const { container } = render(<Dropdown id="dropdown-one" options={optionsSelected} label="Dropdown Label" prefixContent="$" forceFullWidth />);
    const label = container.firstChild.firstChild.firstChild;
    expect(label.getAttribute('cols')).toEqual('12');
  });

  it('render with prop tooltip', () => {
    const tooltip = {
      title: 'Tooltip heading',
      body: 'Prefix and suffix view',
    };
    const { container } = render(<Dropdown id="dropdown-one" options={optionsSelected} label="Dropdown Label" prefixContent="$" forceFullWidth tooltip={tooltip} />);
    const tooltipExist = container.querySelector(' div[role="tooltip"]');
    expect(tooltipExist).toBeInTheDocument();
  });
});
