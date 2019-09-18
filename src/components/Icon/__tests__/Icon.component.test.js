import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon.component';

describe('Icon', () => {

  it('renders correctly without props', () => {
    const { container } = render(<Icon />);
    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector('svg')).not.toBeNull();
    expoect(container.querySelector('.icon')).not.toBeNull();
  });
});
