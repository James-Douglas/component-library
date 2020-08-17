import React from 'react';
import moment from 'moment';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, getByLabelText } from '@testing-library/react';
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
        date={startDate}
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
        date={startDate}
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
    fireEvent.click(getByLabelText(container, 'Tuesday, February 25, 2020'), { exact: false });
    expect(input).toHaveValue('25/02/2020');
  });

  it('click outside of dropdown', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        date={startDate}
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
  it('check default value in date', () => {
    const handleChangeF = jest.fn();
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        date={startDate}
        numberOfMonths={numberOfMonths}
        handleChange={handleChangeF}
        validationMessage="Please provide correct date"
      />,
    );
    const startDateInput = container.querySelector('#start-date');
    const input = container.querySelector('#start-date');
    act(() => {
      input.focus();
    });
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    act(() => {
      fireEvent.change(startDateInput, { target: { value: '08/03/2020' } });
    });
    expect(handleChangeF).toHaveBeenCalled();
    expect(visibleMonths.length).toBe(0);
    expect(startDateInput).toHaveValue('08/03/2020');
  });

  it('insert invalid start date, get error', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container, getByText } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        date={startDate}
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

    act(() => {
      input.blur();
    });

    expect(getByText('Please provide correct date')).toBeInTheDocument();
  });

  it('check accessibility esc', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <SingleDatePicker
        dateId="start-date"
        dateAriaLabel="Select Date"
        date={startDate}
        numberOfMonths={numberOfMonths}
        validationMessage="Please provide correct date"
      />,
    );
    const datepickerWrapBeforeFocus = container.querySelector('[role=application]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    const input = container.querySelector('#start-date');
    act(() => {
      input.focus();
    });
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    fireEvent.keyDown(input, { key: 'Escape', keyCode: 27 });
    expect(visibleMonths.length).toBe(0);
  });

  it('select blocked date, get error', () => {
    const startDate = moment('2020-03-20');
    const isDayBlocked = (e) => true;
    const numberOfMonths = 1;
    const { container, getByText } = render(
      <SingleDatePicker
        dateId="start-date"
        dateTooltip={{ title: 'Start Date' }}
        dateAriaLabel="Select Date"
        date={startDate}
        numberOfMonths={numberOfMonths}
        validationMessage="Please provide correct date"
        isDayBlocked={isDayBlocked}
      />,
    );
    const datepickerWrapBeforeFocus = container.querySelector('[role=application]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    const input = container.querySelector('#start-date');
    act(() => {
      input.focus();
      fireEvent.change(input, { target: { value: '04/03/2020' } });
    });

    act(() => {
      input.blur();
    });

    expect(getByText('Please provide correct date')).toBeInTheDocument();
  });
});
