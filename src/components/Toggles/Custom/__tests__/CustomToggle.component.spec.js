import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomToggle from '../CustomToggle.component';

describe('CustomToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(<CustomToggle id="test-a" />);
    expect(container).toMatchSnapshot();
    expect(container.querySelector('input')).toHaveAttribute('id', 'test-a');
  });

  it('renders with content', () => {
    const { getByText } = render(
      <CustomToggle id="test-b">
        <span id="test-content">this is a test</span>
      </CustomToggle>,
    );
    expect(getByText('this is a test')).toBeInTheDocument();
  });

  it('calls handleChange onchange', () => {
    const handleChangeCb = jest.fn();
    const { container } = render(<CustomToggle id="test-c" handleChange={handleChangeCb} />);
    const toggle = container.querySelector('.toggle');
    fireEvent.click(toggle);
    expect(handleChangeCb).toHaveBeenCalled();
    expect(handleChangeCb.mock.calls[0][0]).toEqual('test-c');
  });
});
