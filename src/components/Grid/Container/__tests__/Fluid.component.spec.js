import React from 'react';
import { render } from '@testing-library/react';
import Fluid from '../Fluid.component';

describe('Container', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Fluid />);
    expect(container).toMatchSnapshot();
  });

  it('has a container class by default and NO fixed class', () => {
    const { container } = render(<Fluid />);

    const fluid = container.querySelector('.container');

    expect(container).toMatchSnapshot();
    expect(fluid).toBeDefined();
    expect(fluid.classList[1]).toBeUndefined();
  });
});
