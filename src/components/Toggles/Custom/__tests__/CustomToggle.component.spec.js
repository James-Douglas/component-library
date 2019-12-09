import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomToggle from '../CustomToggle.component';
import 'jest-styled-components';

describe('CustomToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(<CustomToggle id="test-a" value="test-a" />);
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

  it('calls onToggle onchange', () => {
    const onToggleCb = jest.fn();
    const { container } = render(<CustomToggle id="test-c" value="test-c" onToggle={onToggleCb} />);
    const toggle = container.firstChild;
    fireEvent.click(toggle);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('test-c');
  });
});
