import React from 'react';
import 'jest-styled-components';
import { useTracking } from 'react-tracking';
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
        trackingLabel="test"
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
        trackingLabel="test"
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
        trackingLabel="test"
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

  describe('interaction tracking', () => {
    it('tracks focus events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <ExpressiveInput
          trackingLabel="test"
          id="test-id"
          label="label-test"
          placeholder="placeholder test"
          handleChange={() => {}}
        />,
      );
      const inputField = container.querySelector('#test-id');
      fireEvent.focus(inputField);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Focus',
          ixn_label: 'test',
          ixn_object: 'Input',
          ixn_type: 'Expressive',
          ixn_value: '',
        },
      });
    });

    it('tracks input events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <ExpressiveInput
          trackingLabel="test"
          id="test-id"
          label="label-test"
          placeholder="placeholder test"
          handleChange={() => {}}
        />,
      );
      const inputField = container.querySelector('#test-id');
      fireEvent.input(inputField, { target: { value: 'test content' } });
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Input',
          ixn_label: 'test',
          ixn_object: 'Input',
          ixn_type: 'Expressive',
          ixn_value: 'test content',
        },
      });
    });
  });
});
