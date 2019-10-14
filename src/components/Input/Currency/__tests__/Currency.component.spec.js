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

  xit('fires setValue with raw value', () => {
    const { container, component } = render(Currency, { props: { id: 'test' } });
    const handler = jest.fn();
    component.$on('setValue', handler);

    const currencyElement = container.querySelector('input');
    currencyElement.value = '3333';
    currencyElement.dispatchEvent(new Event('input'));

    return flushPromises().then(() => {
      jest.runAllTimers();
      expect(handler).toHaveBeenCalled();
      expect(handler.mock.calls.length).toBe(1);
      expect(handler.mock.calls[0][0].detail).toBe(3333);
    });
  });

  xit('removes disallowed characters', () => {
    const { container, component } = render(Currency, { props: { id: 'test' } });
    const handler = jest.fn();
    component.$on('setValue', handler);

    const currencyElement = container.querySelector('input');
    currencyElement.value = '22222';
    currencyElement.dispatchEvent(new Event('input'));

    currencyElement.value = '22222f';
    currencyElement.dispatchEvent(new Event('input'));

    return flushPromises().then(() => {
      jest.runAllTimers();
      expect(currencyElement.value).toEqual('22,222');
    });
  });

  xit('does not allow leading zeros', () => {
    const { container, component } = render(Currency, { props: { id: 'test', amount: '222' } });
    const handler = jest.fn();
    component.$on('setValue', handler);

    const currencyElement = container.querySelector('input');
    currencyElement.value = '0222';
    currencyElement.dispatchEvent(new Event('input'));

    return flushPromises().then(() => {
      jest.runAllTimers();
      expect(currencyElement.value).toEqual('222');
      expect(handler.mock.calls.length).toBe(1);
      expect(handler.mock.calls[0][0].detail).toBe(222);
    });
  });

  xit('limits input to given maxLength', () => {
    const { container, component } = render(Currency, { props: { id: 'test', amount: '222' } });
    const handler = jest.fn();
    component.$on('setValue', handler);

    const currencyElement = container.querySelector('input');
    currencyElement.value = '2222222222223';
    currencyElement.dispatchEvent(new Event('input'));

    return flushPromises().then(() => {
      jest.runAllTimers();
      expect(currencyElement.value).toEqual('222,222,222,222');
      expect(handler.mock.calls.length).toBe(1);
      expect(handler.mock.calls[0][0].detail).toBe(222222222222);
    });
  });
});
