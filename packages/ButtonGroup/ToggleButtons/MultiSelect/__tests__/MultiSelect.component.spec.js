import React from 'react';
import ctmTheme from '@comparethemarketau/manor-themes/ctm.theme';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../../../testUtils';
import MultiSelectToggle from '../MultiSelect.component';

describe('MultiSelectToggle', () => {
  it('renders with props', () => {
    const { container, getByText } = render(
      <MultiSelectToggle
        trackingLabel="test multi select"
        id="test-multi-select-toggle"
        title="test multi select"
        description="test description"
        value="test"
        name="test-multi"
      />,
    );
    expect(getByText('test multi select')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders checked styles', () => {
    const { container } = render(
      <MultiSelectToggle
        trackingLabel="test multi select"
        id="test-multi-select-toggle-2"
        title="test multi select"
        description="test description"
        value="test2"
        selectedValues={['test2']}
        name="test-multi"
      />,
    );
    expect(container.querySelector('label')).toHaveStyle(`outline: 2px solid ${ctmTheme.colors.primary500}`);
    expect(container.querySelector('svg')).toHaveStyle(`color: ${ctmTheme.colors.primary500}`);
  });
  it('calls handler functions', () => {
    const toggleHandler = jest.fn();
    const clickHandler = jest.fn();
    const focusHandler = jest.fn();
    const blurHandler = jest.fn();

    const { container } = render(
      <MultiSelectToggle
        trackingLabel="test multi select"
        id="test-multi-select-toggle"
        title="test multi select"
        description="test description"
        value="test"
        selectedValues={['test']}
        name="test-multi"
        handleToggle={toggleHandler}
        handleClick={clickHandler}
        handleFocus={focusHandler}
        handleBlur={blurHandler}
      />,
    );
    const toggleInput = container.querySelector('input');
    const toggleLabel = container.querySelector('label');
    fireEvent.focus(toggleInput);
    expect(focusHandler).toHaveBeenCalled();
    fireEvent.blur(toggleInput);
    expect(blurHandler).toHaveBeenCalled();
    fireEvent.click(toggleLabel);
    expect(clickHandler).toHaveBeenCalled();
    expect(toggleHandler).toHaveBeenCalled();
    expect(toggleHandler.mock.calls[0][0]).toBe('test');
  });

  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <MultiSelectToggle
          trackingLabel="test multi select"
          id="test-multi-select-toggle"
          title="test multi select"
          description="test description"
          value="test"
          selectedValues={['test']}
          name="test-multi"
        />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Toggle Buttons',
          ixn_type: 'MultiSelectToggle',
          ixn_value: 'test multi select',
        },
      });
    });
  });
});
