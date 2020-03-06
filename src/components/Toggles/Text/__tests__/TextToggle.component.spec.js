import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import TextToggle from '../TextToggle.component';

describe('TextToggle', () => {
  it('renders with props', () => {
    const { container } = render(<TextToggle id="test" value="test" label="hello" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('calls handleToggle on toggle when provided', () => {
    const handleToggle = jest.fn();
    const { container } = render(<TextToggle id="test" value="test" label="hello" handleToggle={handleToggle} />);
    fireEvent.click(container.firstChild);
    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle.mock.calls[0][0]).toEqual('test');
  });

  it('calls focus and blur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(<TextToggle id="test" title="testing" label="hello" value="test" handleFocus={handleFocus} handleBlur={handleBlur} />);
    const input = container.querySelector('input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});
