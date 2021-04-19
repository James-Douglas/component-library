import React from 'react';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../../testUtils';
import DateInput from '../DateInput.component';

describe('DateInput', () => {
  it('renders with minimal props', () => {
    const { container } = render(<DateInput id="test-id" handleChange={() => {}} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with lots of props', () => {
    const { container } = render(
      <DateInput
        trackingLabel="test"
        id="test-id"
        handleChange={() => {}}
        label="test label"
        prefillValue="01/01/2019"
        required={false}
      />,
    );
    const input = container.querySelector('input');
    const id = input.getAttribute('id');
    const label = container.querySelector('label');
    const placeholder = input.getAttribute('placeholder');
    const svg = container.querySelector('svg');
    const inputWrap = container.querySelector('.input-container');

    expect(id).toBe('test-id');
    expect(label.textContent).toBe('test label');
    expect(placeholder).toBe('DD/MM/YYYY');
    expect(svg).toBeInTheDocument();
    expect(input.value).toBe('01/01/2019');

    expect(inputWrap.firstChild).toHaveStyle(`border: ${ctmTheme.borders.prefill}`);
  });

  it('displays input masking', () => {
    const { container } = render(<DateInput trackingLabel="test" id="test-id" handleChange={() => {}} />);

    const input = container.querySelector('input');

    fireEvent.input(input, { target: { value: '1' } });
    expect(input.value).toEqual('1_/__/____');

    fireEvent.input(input, { target: { value: '01' } });
    expect(input.value).toEqual('01/__/____');

    fireEvent.input(input, { target: { value: '011' } });
    expect(input.value).toEqual('01/1_/____');

    fireEvent.input(input, { target: { value: '0101' } });
    expect(input.value).toEqual('01/01/____');

    fireEvent.input(input, { target: { value: '01012' } });
    expect(input.value).toEqual('01/01/2___');

    fireEvent.input(input, { target: { value: '010120' } });
    expect(input.value).toEqual('01/01/20__');

    fireEvent.input(input, { target: { value: '0101200' } });
    expect(input.value).toEqual('01/01/200_');

    fireEvent.input(input, { target: { value: '01012000' } });
    expect(input.value).toEqual('01/01/2000');
  });

  it('calls change handler on change', () => {
    const handler = jest.fn();
    const { container } = render(<DateInput trackingLabel="test" id="test-id" handleChange={handler} />);

    const input = container.querySelector('input');
    fireEvent.input(input, { target: { value: '11/13/2000' } });
    fireEvent.input(input, { target: { value: '11/12/2000' } });

    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls.length).toBe(2);
    expect(handler.mock.calls[0][0]).toBe('11/13/2000');
    expect(handler.mock.calls[1][0]).toBe('11/12/2000');
  });

  it('calls focus and blur handlers, check suppress class', () => {
    const focusHandler = jest.fn();
    const blurHandler = jest.fn();
    const { container } = render(
      <DateInput
        trackingLabel="test"
        id="test-id"
        handleFocus={focusHandler}
        handleBlur={blurHandler}
        handleChange={() => {}}
        gtmPidAnonymous
      />,
    );
    const currencyInput = container.querySelector('input');
    fireEvent.focus(currencyInput);
    expect(focusHandler).toHaveBeenCalled();
    fireEvent.blur(currencyInput);
    expect(blurHandler).toHaveBeenCalled();
    const inputField = container.querySelector('.input-container');
    expect(inputField).toHaveClass('data-hj-suppress');
  });

  it('constrains mask based on "format" prop', () => {
    const { container } = render(
      <DateInput
        trackingLabel="test"
        id="test-id"
        handleChange={() => {}}
        format="MM/YYYY"
        prefillValue="01/2019"
      />,
    );

    const input = container.querySelector('input');
    expect(input.value).toBe('01/2019');

    const placeholder = input.getAttribute('placeholder');
    expect(placeholder).toBe('MM/YYYY');

    fireEvent.input(input, { target: { value: '1' } });
    expect(input.value).toEqual('1_/____');

    fireEvent.input(input, { target: { value: '01' } });
    expect(input.value).toEqual('01/____');

    fireEvent.input(input, { target: { value: '012' } });
    expect(input.value).toEqual('01/2___');

    fireEvent.input(input, { target: { value: '0120' } });
    expect(input.value).toEqual('01/20__');

    fireEvent.input(input, { target: { value: '01200' } });
    expect(input.value).toEqual('01/200_');

    fireEvent.input(input, { target: { value: '012000' } });
    expect(input.value).toEqual('01/2000');

    const inputField = container.querySelector('.input-container');
    expect(inputField).not.toHaveClass('data-hj-suppress');
  });

  describe('interaction tracking', () => {
    it('tracks focus events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <DateInput
          trackingLabel="test"
          id="test-id"
          handleChange={() => {}}
          format="MM/YYYY"
        />,
      );
      const inputField = container.querySelector('#test-id');
      fireEvent.focus(inputField);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Focus',
          ixn_label: 'test',
          ixn_object: 'Input',
          ixn_type: 'Date',
          ixn_value: '',
        },
      });
    });

    it('tracks input events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <DateInput
          trackingLabel="test"
          id="test-id"
          handleChange={() => {}}
          format="DD/MM/YYYY"
        />,
      );
      const inputField = container.querySelector('#test-id');
      fireEvent.input(inputField, { target: { value: '01012021' } });
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Input',
          ixn_label: 'test',
          ixn_object: 'Input',
          ixn_type: 'Date',
          ixn_value: '01/01/2021',
        },
      });
    });

    it('tracks clear events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <DateInput
          trackingLabel="test"
          id="test-id"
          handleChange={() => {}}
          format="DD/MM/YYYY"
        />,
      );
      const inputField = container.querySelector('#test-id');
      fireEvent.change(inputField, { target: { value: '01022021' } });
      const clearBtn = container.querySelector('.input-clear-button');
      fireEvent.click(clearBtn);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Input',
          ixn_label: 'test',
          ixn_object: 'Input',
          ixn_type: 'Date',
          ixn_value: '01/02/2021',
        },
      });
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Clear',
          ixn_label: 'test',
          ixn_object: 'Input',
          ixn_type: 'Date',
          ixn_value: '',
        },
      });
    });
  });
});
