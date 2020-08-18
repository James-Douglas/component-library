import React from 'react';
import 'jest-styled-components';
import { render, fireEvent, wait } from '../../../../testUtils';
import ExpressiveInput from '../ExpressiveInput.component';

describe('ExpressiveInput', () => {
  it('renders with minimal props', () => {
    const { container } = render(<ExpressiveInput id="test-id" handleChange={() => {}} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with lots of props', () => {
    const { container, getByText } = render(
      <ExpressiveInput
        id="test-id"
        label="label-test"
        placeholder="placeholder test"
        prefixContent="$"
        maxlength={5}
        autocomplete="on"
        handleChange={() => {}}
      />,
    );
    const expressiveInput = container.querySelector('input');
    const id = expressiveInput.getAttribute('id');
    const label = container.querySelector('label');
    const placeholder = expressiveInput.getAttribute('placeholder');
    const autocomplete = expressiveInput.getAttribute('autocomplete');

    expect(id).toBe('test-id');
    expect(label.textContent).toBe('label-test');
    expect(placeholder).toBe('placeholder test');
    expect(getByText('$')).toBeInTheDocument();
    expect(autocomplete).toBe('on');
  });

  it('renders the expected design', () => {
    const { container, getByText } = render(
      <ExpressiveInput
        id="test-id"
        label="label-test"
        handleChange={() => {}}
      />,
    );

    const inputField = container.querySelector('input');
    const label = getByText('label-test');

    expect(label).toHaveStyleRule('visibility', 'hidden');

    fireEvent.input(inputField, { target: { value: 'test' } });

    wait(() => {
      expect(label).toHaveStyleRule('visibility', 'visible');
    });
  });

  it('calls func on change', () => {
    const handlerFn = jest.fn();
    const { container } = render(
      <ExpressiveInput
        id="test-id"
        handleChange={handlerFn}
      />,
    );

    const inputField = container.querySelector('input');
    fireEvent.input(inputField, { target: { value: 'test' } });

    expect(handlerFn).toHaveBeenCalled();
    expect(handlerFn.mock.calls.length).toBe(1);
    expect(handlerFn.mock.calls[0][0]).toBe('test');
  });
});
