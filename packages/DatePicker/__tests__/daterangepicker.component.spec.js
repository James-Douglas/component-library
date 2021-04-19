import React from 'react';
import moment from 'moment';
import { useTracking } from 'react-tracking';
import {
  fireEvent, render, getByLabelText,
} from '../../../testUtils';
import DateRangePicker from '../DateRangePicker.component';
import 'jest-styled-components';

describe('DateRangePicker', () => {
  it('renders correct number options', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={2}
      />,
    );
    const startDateLabel = container.querySelector('[for=start-date]');
    const endDateLabel = container.querySelector('[for=end-date]');
    expect(startDateLabel).toBeInTheDocument();
    expect(endDateLabel).toBeInTheDocument();
  });

  it('renders correct number options when focus on end date', () => {
    const handleChangeF = jest.fn();
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        handleChange={handleChangeF}
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessageText="Please enter correct date"
      />,
    );
    const endDateInput = container.querySelector('#end-date');
    const datepickerWrapBeforeFocus = container.querySelector('[role="application"]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    endDateInput.focus();
    expect(endDateInput).toHaveFocus();
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    // 3 visible + 2 hidden
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    const datepickerWrapAfterFocus = container.querySelector('[role=application]');
    expect(datepickerWrapAfterFocus).toBeInTheDocument();
    endDateInput.focus();
    fireEvent.click(getByLabelText(container, 'Tuesday, April 28, 2020', { exact: false }));
    expect(handleChangeF).toHaveBeenCalled();
    expect(visibleMonths.length).toBe(0);
    expect(endDateInput).toHaveValue('28/04/2020');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
  });

  it('click outside of dropdown', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
      />,
    );
    const evt = new Event('mousedown', { bubbles: false, cancelable: false, composed: false });
    const datepickerWrapBeforeFocus = container.querySelector('[role=application]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    const input = container.querySelector('#start-date');
    input.focus();
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    const datepickerWrapAfterFocus = container.querySelector('[role=application]');
    expect(datepickerWrapAfterFocus).toBeInTheDocument();
    document.dispatchEvent(evt);
    expect(visibleMonths.length).toBe(0);
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
  });

  it('renders correct on focus', () => {
    const startDate = moment().startOf('day');
    const endDate = moment().endOf('month');
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={2}
      />,
    );
    const input = container.querySelector('#start-date');
    const datepickerWrapBeforeFocus = container.querySelector('[role=presentation]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    input.focus();
    const datepickerWrapAfterFocus = container.querySelector('[role=presentation]');
    expect(datepickerWrapAfterFocus).toBeInTheDocument();
  });

  it('renders input', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessageText="Please enter correct date"
        startDateValidationMessageText="Please enter correct date"
      />,
    );

    const input = container.querySelector('#start-date');
    const datepickerWrapBeforeFocus = container.querySelector('[role="application"]');
    expect(datepickerWrapBeforeFocus).not.toBeInTheDocument();
    input.focus();
    expect(input).toHaveFocus();
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    // 3 visible + 2 hidden
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    const datepickerWrapAfterFocus = container.querySelector('[role=application]');
    expect(datepickerWrapAfterFocus).toBeInTheDocument();
    input.value = '';
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  it('check focus end date input', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessageText="Please enter correct s date"
        startDateValidationMessageText="Please enter correct e date"
      />,
    );
    const input = container.querySelector('#end-date');
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    input.focus();
    fireEvent.change(input, { target: { value: '04/03/2020' } });
    expect(visibleMonths.length).toBe(0);
    const datepickerWrapAfterChoice = container.querySelector('[role="application"]');
    expect(datepickerWrapAfterChoice).not.toBeInTheDocument();
  });

  it('check focus start date input', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessageText="Please enter correct s date"
        startDateValidationMessageText="Please enter correct e date"
      />,
    );
    const input = container.querySelector('#start-date');
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    input.focus();
    fireEvent.change(input, { target: { value: '04/03/2020' } });
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    const datepickerWrapAfterChoice = container.querySelector('[role="application"]');
    expect(datepickerWrapAfterChoice).toBeInTheDocument();
  });

  it('insert invalid start date, get error', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container, getByText } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessage="Please enter correct s date"
        startDateValidationMessage="Please enter correct e date"
      />,
    );
    const inputStart = container.querySelector('#start-date');
    inputStart.focus();
    fireEvent.change(inputStart, { target: { value: '04/03/202' } });
    expect(getByText('Please enter correct e date')).toBeInTheDocument();
  });

  it('insert invalid end date, get error', () => {
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container, getByText } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessage="Please enter correct s date"
        startDateValidationMessage="Please enter correct e date"
      />,
    );
    const inputEnd = container.querySelector('#end-date');
    inputEnd.focus();
    fireEvent.change(inputEnd, { target: { value: '04/03/202' } });
    expect(getByText('Please enter correct s date')).toBeInTheDocument();
  });

  it('check accessibility esc', () => {
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        numberOfMonths={numberOfMonths}
        endDateValidationMessage="Please enter correct s date"
        startDateValidationMessage="Please enter correct e date"
      />,
    );
    const startDateInput = container.querySelector('#start-date');
    fireEvent.keyDown(startDateInput, { key: 'Tab', keyCode: 9 });
    startDateInput.focus();
    const visibleMonths = container.getElementsByClassName('CalendarMonth');
    expect(visibleMonths.length).toBe(numberOfMonths + 2);
    fireEvent.keyDown(startDateInput, { key: 'Escape', keyCode: 27 });
    expect(visibleMonths.length).toBe(0);
  });

  describe('interaction tracking', () => {
    it('tracks focus event', () => {
      const { trackEvent } = useTracking();
      const startDate = moment('2020-03-20T00:00:00.000');
      const endDate = moment('2020-04-20T00:00:00.000');
      const numberOfMonths = 3;
      const { container } = render(
        <DateRangePicker
          trackingLabel="date range picker test"
          startDateId="start-date"
          startDateTooltip={{ title: 'Start Date' }}
          startDateAriaLabel="Start Date"
          startDateValue={startDate}
          endDateId="end-date"
          endDateTooltip={{ title: 'End Date' }}
          endDateAriaLabel="End Date"
          endDateValue={endDate}
          numberOfMonths={numberOfMonths}
          endDateValidationMessageText="Please enter correct date"
        />,
      );
      const endDateInput = container.querySelector('#end-date');
      endDateInput.focus();
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Focus',
          ixn_label: 'date range picker test',
          ixn_object: 'Date Picker',
          ixn_type: 'Date Range',
          ixn_value: {
            'End Date': '20/04/2020',
            'Start Date': '20/03/2020',
          },
        },
      });
    });
  });

  it('tracks input event', () => {
    const { trackEvent } = useTracking();
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessageText="Please enter correct date"
      />,
    );
    const endDateInput = container.querySelector('#end-date');
    fireEvent.change(endDateInput, { target: { value: '21/04/2020' } });
    expect(trackEvent).toHaveBeenCalledWith({
      interaction: {
        ixn_action: 'Input',
        ixn_label: 'date range picker test',
        ixn_object: 'Date Picker',
        ixn_type: 'Date Range',
        ixn_value: {
          'End Date': '21/04/2020',
          'Start Date': '20/03/2020',
        },
      },
    });
  });

  it('tracks selection event', () => {
    const { trackEvent } = useTracking();
    const startDate = moment('2020-03-20T00:00:00.000');
    const endDate = moment('2020-04-20T00:00:00.000');
    const numberOfMonths = 3;
    const { container } = render(
      <DateRangePicker
        trackingLabel="date range picker test"
        startDateId="start-date"
        startDateTooltip={{ title: 'Start Date' }}
        startDateAriaLabel="Start Date"
        startDateValue={startDate}
        endDateId="end-date"
        endDateTooltip={{ title: 'End Date' }}
        endDateAriaLabel="End Date"
        endDateValue={endDate}
        numberOfMonths={numberOfMonths}
        endDateValidationMessageText="Please enter correct date"
      />,
    );
    const endDateInput = container.querySelector('#end-date');
    endDateInput.focus();
    fireEvent.click(getByLabelText(container, 'Tuesday, April 28, 2020', { exact: false }));
    expect(trackEvent).toHaveBeenCalledWith({
      interaction: {
        ixn_action: 'Selection',
        ixn_label: 'date range picker test',
        ixn_object: 'Date Picker',
        ixn_type: 'Date Range',
        ixn_value: {
          'End Date': '28/04/2020',
          'Start Date': '20/03/2020',
        },
      },
    });
  });
});
