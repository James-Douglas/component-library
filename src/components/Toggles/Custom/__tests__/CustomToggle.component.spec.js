import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import CustomToggle from '../CustomToggle.component';
import 'jest-styled-components';

describe('CustomToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(<CustomToggle id="test-a" value="test-a" handleToggle={() => {}} />);
    expect(container).toMatchSnapshot();
    expect(container.querySelector('input')).toHaveAttribute('id', 'test-a');
  });

  it('renders with content', () => {
    const { getByText } = render(
      <CustomToggle id="test-b" value="test-b">
        <span id="test-content">this is a test</span>
      </CustomToggle>,
    );
    expect(getByText('this is a test')).toBeInTheDocument();
  });

  it('calls handleToggle onchange', () => {
    const onToggleCb = jest.fn();
    const { container } = render(<CustomToggle id="test-c" value="test-c" handleToggle={onToggleCb} />);
    const toggle = container.firstChild;
    fireEvent.click(toggle);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('test-c');
  });
  it('calls focus and blur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(<CustomToggle id="test-d" value="test-d" handleToggle={() => {}} handleFocus={handleFocus} handleBlur={handleBlur} />);
    const input = container.querySelector('input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});
