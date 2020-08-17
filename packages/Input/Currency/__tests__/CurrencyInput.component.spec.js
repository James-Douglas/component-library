import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CurrencyInput from '../CurrencyInput.component';

describe('CurrencyInput', () => {
  it('renders with minimal props', () => {
    const { container } = render(<CurrencyInput id="test-id" handleChange={() => {}} />);

    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with lots of props', () => {
    const { container, getByText } = render(
      <CurrencyInput
        id="test-id"
        label="label-test"
        placeholder="placeholder test"
        currencySymbol="$"
        maxlength={5}
        autocomplete="on"
        handleChange={() => {}}
      />,
    );

    const currencyInput = container.querySelector('input');
    const id = currencyInput.getAttribute('id');
    const label = container.querySelector('label');
    const placeholder = currencyInput.getAttribute('placeholder');
    const autocomplete = currencyInput.getAttribute('autocomplete');

    expect(id).toBe('test-id');
    expect(label.textContent).toBe('label-test');
    expect(placeholder).toBe('placeholder test');
    expect(getByText('$')).toBeInTheDocument();
    expect(autocomplete).toBe('on');
  });

  it('displays formatted input', () => {
    const { container } = render(
      <CurrencyInput
        id="test-id"
        handleChange={() => {}}
      />,
    );

    const currencyInput = container.querySelector('input');

    fireEvent.input(currencyInput, { target: { value: '2000000000' } });
    expect(currencyInput.value).toEqual('2,000,000,000');

    fireEvent.input(currencyInput, { target: { value: '200000000' } });
    expect(currencyInput.value).toEqual('200,000,000');

    fireEvent.input(currencyInput, { target: { value: '2000000' } });
    expect(currencyInput.value).toEqual('2,000,000');

    fireEvent.input(currencyInput, { target: { value: '200000' } });
    expect(currencyInput.value).toEqual('200,000');

    fireEvent.input(currencyInput, { target: { value: '20000' } });
    expect(currencyInput.value).toEqual('20,000');

    fireEvent.input(currencyInput, { target: { value: '2000' } });
    expect(currencyInput.value).toEqual('2,000');

    fireEvent.input(currencyInput, { target: { value: '200' } });
    expect(currencyInput.value).toEqual('200');

    fireEvent.input(currencyInput, { target: { value: '20' } });
    expect(currencyInput.value).toEqual('20');
  });

  it('calls change handler on change', () => {
    const handler = jest.fn();
    const { container } = render(
      <CurrencyInput
        id="test-id"
        handleChange={handler}
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '2222222' } });

    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls.length).toBe(1);
    expect(handler.mock.calls[0][0]).toBe(2222222);
  });

  it('calls focus and blur handlers', () => {
    const focusHandler = jest.fn();
    const blurHandler = jest.fn();
    const { container } = render(
      <CurrencyInput
        id="test-id"
        handleFocus={focusHandler}
        handleBlur={blurHandler}
        handleChange={() => {}}
      />,
    );
    const currencyInput = container.querySelector('input');
    fireEvent.focus(currencyInput);
    expect(focusHandler).toHaveBeenCalled();
    fireEvent.blur(currencyInput);
    expect(blurHandler).toHaveBeenCalled();
  });

  it('removes disallowed characters and formats the input', () => {
    const { container } = render(
      <CurrencyInput
        id="test-id"
        handleChange={() => {}}
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '2v222222p1' } });

    expect(currencyInput.value).toEqual('22,222,221');
  });

  it('does not allow leading zeros', () => {
    const { container } = render(
      <CurrencyInput
        id="test-id"
        handleChange={() => {}}
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '000000022' } });

    expect(currencyInput.value).toEqual('22');
  });

  it('limits input to given maxLength', () => {
    const { container } = render(
      <CurrencyInput
        id="test-id"
        handleChange={() => {}}
        maxlength={5}
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '22222222' } });

    expect(currencyInput.value).toEqual('22,222');
  });
});
