import React from 'react';
import { fireEvent, render } from '../../../../../testUtils';
import ProductSelect from '../ProductSelect';

describe('ProductSelect', () => {
  it('renders with props', () => {
    const { container } = render(<ProductSelect className="test" buttonText="test button" />);
    expect(container.querySelector('.test')).toBeInTheDocument();
    expect(container.querySelector('button').innerHTML).toEqual('test button');
  });
  it('calls onSelect on button press', () => {
    const selectHandler = jest.fn();
    const { container } = render(<ProductSelect className="test" buttonText="test button" onSelect={selectHandler} />);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(selectHandler).toHaveBeenCalled();
  });
});
