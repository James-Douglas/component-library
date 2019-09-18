import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon.component';

describe('Icon', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Icon name="info" />);
    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('.icon')).not.toBeNull();
  });
});
