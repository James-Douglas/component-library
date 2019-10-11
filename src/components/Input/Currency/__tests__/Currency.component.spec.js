import { render } from '@testing-library/svelte';
import flushPromises from '@comparethemarketau/manor-config/utils/flushPromises';
import Currency from '../Currency.svelte';

describe('Currency.svelte', () => {
  it('renders correctly', () => {
    const { container } = render(Currency, { props: { id: 'test' } });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('displays formatted input', () => {
    const { container } = render(Currency, { props: { id: 'test' } });

    const currencyElement = container.querySelector('input');
    currencyElement.value = '2222222';
    currencyElement.dispatchEvent(new Event('input'));

    return flushPromises().then(() => {
      jest.runAllTimers();
      expect(currencyElement.value).toEqual('2,222,222');
    });
  });

  it('fires setValue with raw value', () => {
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

  it('removes disallowed characters', () => {
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

  it('does not allow leading zeros', () => {
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

  it('limits input to given maxLength', () => {
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
