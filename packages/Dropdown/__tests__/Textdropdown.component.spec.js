import React from 'react';
import TextDropdown from '../TextDropdown.component';
import TextDropdownItem from '../TextDropdownItem.component';
import { fireEvent, render } from '../../../testUtils';

describe('TextDropdown', () => {
  it('can render a text dropdown with provided options', () => {
    const { getByText } = render(
      <TextDropdown label="Example Dropdown">
        <TextDropdownItem value="ONE">Option One</TextDropdownItem>
        <TextDropdownItem value="TWO">Option Two</TextDropdownItem>
        <TextDropdownItem value="THREE">Option Three</TextDropdownItem>
      </TextDropdown>,
    );
    expect(getByText('Example Dropdown')).toBeInTheDocument();
  });

  it('can display the correct options when clicked', () => {
    const { getByRole, getByText } = render(
      <TextDropdown label="Example Dropdown">
        <TextDropdownItem value="ONE">Option One</TextDropdownItem>
        <TextDropdownItem value="TWO">Option Two</TextDropdownItem>
        <TextDropdownItem value="THREE">Option Three</TextDropdownItem>
      </TextDropdown>,
    );
    const buttonEl = getByRole('button');
    fireEvent.mouseDown(buttonEl);
    expect(getByText('Option One')).toBeInTheDocument();
    expect(getByText('Option Two')).toBeInTheDocument();
    expect(getByText('Option Three')).toBeInTheDocument();
  });

  it('can respond to a clicked option', () => {
    const mockChangeCallback = jest.fn();
    const { getByRole, getByText } = render(
      <TextDropdown label="Example Dropdown" handleChange={mockChangeCallback}>
        <TextDropdownItem value="ONE">Option One</TextDropdownItem>
        <TextDropdownItem value="TWO">Option Two</TextDropdownItem>
        <TextDropdownItem value="THREE">Option Three</TextDropdownItem>
      </TextDropdown>,
    );
    const buttonEl = getByRole('button');
    fireEvent.mouseDown(buttonEl);
    const optionTwoEl = getByText('Option Two');
    optionTwoEl.click();
    expect(getByText('Option Two')).toBeInTheDocument();
  });

  it('can render with a preselected value', () => {
    const { getByText } = render(
      <TextDropdown label="Example Dropdown" value="ONE">
        <TextDropdownItem value="ONE">Option One</TextDropdownItem>
        <TextDropdownItem value="TWO">Option Two</TextDropdownItem>
        <TextDropdownItem value="THREE">Option Three</TextDropdownItem>
      </TextDropdown>,
    );
    expect(getByText('Option One')).toBeInTheDocument();
  });

  it('can trigger the click handler when the dropdown is clicked', () => {
    const mockClickCallback = jest.fn();
    const { container } = render(
      <TextDropdown
        label="Example Dropdown"
        value="ONE"
        handleClick={mockClickCallback}
      >
        <TextDropdownItem value="ONE">Option One</TextDropdownItem>
        <TextDropdownItem value="TWO">Option Two</TextDropdownItem>
        <TextDropdownItem value="THREE">Option Three</TextDropdownItem>
      </TextDropdown>,
    );
    const fakeEl = container.querySelector(
      '[data-manor-element="text dropdown"]',
    );
    fakeEl.focus();
    fakeEl.click();
    expect(mockClickCallback.mock.calls.length).toBe(1);
  });

  it('can trigger the focus handler when the dropdown is clicked', () => {
    const mockFocusCallback = jest.fn();
    const { container } = render(
      <TextDropdown
        label="Example Dropdown"
        value="ONE"
        handleFocus={mockFocusCallback}
      >
        <TextDropdownItem value="ONE">Option One</TextDropdownItem>
        <TextDropdownItem value="TWO">Option Two</TextDropdownItem>
        <TextDropdownItem value="THREE">Option Three</TextDropdownItem>
      </TextDropdown>,
    );
    const fakeEl = container.querySelector(
      '[data-manor-element="text dropdown"]',
    );
    fakeEl.focus();
    fakeEl.click();
    expect(mockFocusCallback.mock.calls.length).toBe(1);
  });
});
