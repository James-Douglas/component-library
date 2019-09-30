import React from 'react';
import { render } from '@testing-library/react';
import Bar from '../Bar.component';

describe('Bar', () => {
  it('renders correctly', () => {
    const { container } = render(<Bar value="66" backwards={false} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
