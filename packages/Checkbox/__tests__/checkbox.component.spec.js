import React from 'react';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Checkbox, { renderIcon } from '../Checkbox.component';

describe('renderIcon()', () => {
  // eslint-disable-next-line react/prop-types
  const IconContainer = ({ icon, toggle }) => (
    <>
      {renderIcon(icon, toggle)}
    </>
  );

  it('does not render an icon if toggle condition is not met', () => {
    const { container } = render(<div id="test"><IconContainer icon={faTimes} toggle={false} /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });

  it('renders an icon when params are set (icon name and toggle is true)', () => {
    const { container } = render(<IconContainer icon={faTimes} toggle />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('Checkbox', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Checkbox id="test-id" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <Checkbox
        trackingLabel="test"
        id="test-id"
        icon={faTimes}
        disabled={false}
        invertColour
        handleChange={mockTestClick}
      >
        <p>child content</p>
      </Checkbox>,
    );

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');
    const labelStyle = label.firstChild;

    fireEvent.click(label, { button: 0 });

    expect(mockTestClick).toHaveBeenCalled();
    expect(labelStyle).toHaveStyle(`background: ${ctmTheme.checkbox.background}`);
    expect(checkbox.getAttribute('disabled')).toBe(null);
    expect(container.querySelector('#child-content')).toBeDefined();
    expect(container.getElementsByTagName('svg')).toBeDefined();
    expect(container.querySelector('.fa-check')).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders an invalid state', () => {
    const { container } = render(
      <Checkbox
        trackingLabel="test"
        id="test-id"
        validationMessage="error"
      >
        <p>child content</p>
      </Checkbox>,
    );

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');
    const labelStyle = label.firstChild;
    fireEvent.click(label, { button: 0 });

    expect(labelStyle).toHaveStyle(`border: ${ctmTheme.checkbox.invalid}`);
    expect(checkbox.getAttribute('disabled')).toBe(null);
    expect(container.querySelector('#child-content')).toBeDefined();
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });

  it('renders an invalid state with prop', () => {
    const { container } = render(
      <Checkbox
        trackingLabel="test"
        id="test-id"
        invalid
      >
        <p>child content</p>
      </Checkbox>,
    );

    const label = container.querySelector('label');
    const labelStyle = label.firstChild;
    fireEvent.click(label, { button: 0 });

    expect(labelStyle).toHaveStyle(`border: ${ctmTheme.checkbox.invalid}`);
  });

  it('accepts a prefill value', () => {
    const { container } = render(
      <Checkbox
        trackingLabel="test"
        id="test-id"
        isSelected
      />,
    );

    const checkbox = container.querySelector('#test-id');
    expect(checkbox.checked).toBe(true);
  });

  it('checks on click', () => {
    const changeHandler = jest.fn();
    const { container } = render(<Checkbox trackingLabel="test" id="test-id" disabled={false} invertColour handleChange={changeHandler} />);

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');

    fireEvent.click(label, { button: 0 });

    expect(checkbox.checked).toBe(true);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler.mock.calls[0][0]).toBe('test-id');
  });

  it('click is disabled when disabled prop is supplied', () => {
    const { container } = render(<Checkbox trackingLabel="test" id="test-id" disabled />);

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');

    fireEvent.click(label, { button: 0 });

    expect(checkbox.checked).toBe(false);
  });

  it('calls focus handler on focus', () => {
    const handleFocus = jest.fn();
    const { container } = render(<Checkbox trackingLabel="test" id="test-id" handleFocus={handleFocus} />);
    const input = container.querySelector('input');
    input.focus();
    expect(handleFocus).toHaveBeenCalled();
  });

  it('calls blur handler on blur', () => {
    const handleBlur = jest.fn();
    const { container } = render(<Checkbox trackingLabel="test" id="test-id" handleBlur={handleBlur} />);
    const input = container.querySelector('input');
    input.focus();
    input.blur();
    expect(handleBlur).toHaveBeenCalled();
  });

  it('calls handleClick on click', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Checkbox trackingLabel="test" id="test-id" handleClick={handleClick} />,
    );
    const label = container.querySelector('label');
    fireEvent.click(label, { button: 0 });
    expect(handleClick).toHaveBeenCalled();
  });

  describe('interaction tracking', () => {
    it('tracks Select and Unselect events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(<Checkbox trackingLabel="test" id="test-id" />);
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Select',
          ixn_label: 'test',
          ixn_object: 'Checkbox',
          ixn_type: 'Checkbox',
          ixn_value: '',
        },
      });
      fireEvent.click(input);
      expect(trackEvent.mock.calls[1][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Unselect',
          ixn_label: 'test',
          ixn_object: 'Checkbox',
          ixn_type: 'Checkbox',
          ixn_value: '',
        },
      });
    });
  });
});
