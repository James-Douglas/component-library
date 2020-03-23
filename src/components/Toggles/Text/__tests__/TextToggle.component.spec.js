import React from 'react';
import { render } from '../../../../testUtils';
import TextToggle from '../TextToggle.component';

describe('TextToggle', () => {
  it('renders with props', () => {
    const { container } = render(<TextToggle id="test" value="test" label="hello" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
