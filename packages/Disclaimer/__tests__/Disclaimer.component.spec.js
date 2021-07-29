import React from 'react';
import { render, fireEvent } from '../../../testUtils';
import Disclaimer from '../Disclaimer.component';

describe('Disclaimer', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Disclaimer trackingLabel="test" id="test" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('checks on click', () => {
    const changeHandler = jest.fn();
    const { container } = render(<Disclaimer trackingLabel="test" id="test" handleChange={changeHandler} />);
    const checkbox = container.querySelector('#test');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(changeHandler).toHaveBeenCalled();
    expect(changeHandler.mock.calls[0][0]).toBe('test', true);
  });
  it('checks on click of label', () => {
    const changeHandler = jest.fn();
    const { container, getByText } = render(<Disclaimer trackingLabel="test" id="test-2" handleChange={changeHandler}>test disclaimer text</Disclaimer>);
    const checkbox = container.querySelector('#test-2');
    const disclaimerText = getByText('test disclaimer text');
    fireEvent.click(disclaimerText);
    expect(checkbox.checked).toBe(true);
    expect(changeHandler).toHaveBeenCalled();
    expect(changeHandler.mock.calls[0][0]).toBe('test-2', true);
  });
});
