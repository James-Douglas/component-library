import React from 'react';
import { render } from '@testing-library/react';
import TextToggle from '../TextToggle.component';

describe('TextToggle', () => {
  it('renders with props', () => {
    const { container } = render(<TextToggle id="test" value="test" title="hello" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
