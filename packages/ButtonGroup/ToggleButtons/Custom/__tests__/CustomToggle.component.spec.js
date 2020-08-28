import React from 'react';
import { render } from '../../../../../testUtils';
import CustomToggle from '../CustomToggle.component';
import 'jest-styled-components';

describe('CustomToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <CustomToggle id="test-a" value="test-a" handleToggle={() => {}} />,
    );
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
});
