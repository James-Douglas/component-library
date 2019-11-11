import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Currency, { valueMasking } from '../Currency.component';

describe('valueMasking()', () => {
  it('returns a raw value and a parsed value', () => {
    const { raw, parsed } = valueMasking('2000', 15);

    expect(raw).toEqual('2000');
    expect(parsed).toEqual('2,000');
  });

  it('removes disallowed characters and formats the input', () => {
    const { raw, parsed } = valueMasking('2v222222p1', 15);

    expect(raw).toEqual('22222221');
    expect(parsed).toEqual('22,222,221');
  });

  it('does not allow leading zeros', () => {
    const { raw, parsed } = valueMasking('00000022222221', 15);

    expect(raw).toEqual('00000022222221');
    expect(parsed).toEqual('22,222,221');
  });

  it('limits input to given maxLength', () => {
    const { raw, parsed } = valueMasking('2222222222222222222222222', 15);

    expect(raw).toEqual('222222222222222');
    expect(parsed).toEqual('222,222,222,222,222');
  });
});

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
        disableFieldset
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
        disableFieldset
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

  it('fires an additional function supplied as a prop', () => {
    const handler = jest.fn();
    const { container } = render(
      <Currency
        id="test-id"
        handleChange={handler}
        disableFieldset
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '2222222' } });

    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls.length).toBe(1);
    expect(handler.mock.calls[0][0]).toBe('2,222,222');
  });

  it('removes disallowed characters and formats the input', () => {
    const { container } = render(
      <Currency
        id="test-id"
        handleChange={() => {}}
        disableFieldset
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
        disableFieldset
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
        disableFieldset
      />,
    );

    const currencyInput = container.querySelector('input');
    fireEvent.input(currencyInput, { target: { value: '22222222' } });

    expect(currencyInput.value).toEqual('22,222');
  });
});
