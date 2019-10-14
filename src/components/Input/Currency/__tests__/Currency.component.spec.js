import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Currency from '../Currency.component';

/*
id, label, placeholder, prefillValue, handleChange, currencySymbol, bordered,
required, disabled, invalid, autocomplete, tooltip, maxlength,
*/
describe('Currency', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Currency id="test-id" handleChange={() => {}} />);

    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with lots of props', () => {
    const { container } = render(
      <Currency
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
    const prefix = container.querySelector('.prefix');
    const autocomplete = currencyInput.getAttribute('autocomplete');

    expect(id).toBe('test-id');
    expect(label.textContent).toBe('label-test');
    expect(placeholder).toBe('placeholder test');
    expect(prefix.textContent).toBe('$');
    expect(autocomplete).toBe('on');
  });

  it('displays formatted input', () => {
    const { container } = render(
      <Currency
        id="test-id"
        handleChange={() => {}}
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '2222222' } });

    expect(currencyInput.value).toEqual('2,222,222');
  });

  it('fires an additional function supplied as a prop', () => {
    const handler = jest.fn();
    const { container } = render(
      <Currency
        id="test-id"
        handleChange={handler}
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '2222222' } });

    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls.length).toBe(2);
  });

  it('removes disallowed characters and formats the input', () => {
    const { container } = render(
      <Currency
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
      <Currency
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
      <Currency
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
