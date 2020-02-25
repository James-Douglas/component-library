import React from 'react';
import moment from 'moment';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, getByLabelText } from '../../../testUtils';
import SingleDatePicker from '../SingleDatePicker.component';
import 'jest-styled-components';

describe('SingleDatePicker', () => {
  it('renders correct number options', () => {
    const startDate = moment('2020-02-18T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        dateValue={startDate}
        numberOfMonths={numberOfMonths}
        isDayBlocked={(day) => day.weekday() === 4}
      />,
    );

    const input = container.querySelector('#start-date');
    const datepickerWrapBeforeFocus = container.querySelector('[role="presentation"]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    act(() => {
      input.focus();
    });
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    // 3 visible + 2 hidden
    expect(visibleMonths.length).toBe(numberOfMonths + 2);

    const datepickerWrapAfterFocus = container.querySelector('[role=presentation]');
    expect(datepickerWrapAfterFocus).toBeInTheDocument();
  });
  it('check dateHandleChange function', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 1;
    const { container } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        dateValue={startDate}
        numberOfMonths={numberOfMonths}
        validationMessage="Please provide correct date"
      />,
    );

    const input = container.querySelector('#start-date');
    act(() => {
      input.focus();
    });
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    // 1 visible + 2 hidden
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    fireEvent.click(getByLabelText(container, 'Thursday, February 27, 2020'), { exact: false });
    expect(input).toHaveValue('27/02/2020');
  });

  it('click outside of dropdown', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        dateValue={startDate}
        numberOfMonths={numberOfMonths}
        validationMessage="Please provide correct date"
      />,
    );
    const evt = new Event('mousedown', { bubbles: false, cancelable: false, composed: false });
    const datepickerWrapBeforeFocus = container.querySelector('[role=application]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    const input = container.querySelector('#start-date');
    act(() => {
      input.focus();
    });
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    const datepickerWrapAfterFocus = container.querySelector('[role=application]');
    expect(datepickerWrapAfterFocus).toBeInTheDocument();
    act(() => {
      document.dispatchEvent(evt);
    });
    expect(visibleMonths.length).toBe(0);
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
  });

  it('insert invalid start date, get error', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container, getByText } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        dateValue={startDate}
        numberOfMonths={numberOfMonths}
        validationMessage="Please provide correct date"
      />,
    );
    const datepickerWrapBeforeFocus = container.querySelector('[role=application]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    const input = container.querySelector('#start-date');
    act(() => {
      input.focus();
      fireEvent.change(input, { target: { value: '04/03/202' } });
    });
    expect(getByText('Please provide correct date')).toBeInTheDocument();
  });
});
