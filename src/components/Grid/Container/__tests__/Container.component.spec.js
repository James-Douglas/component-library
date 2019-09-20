import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container.component';

describe('Container', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
  });

  it('has a container and fixed class by default', () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();

    const fixed = container.getElementsByClassName('fixed');
    const containerComponent = container.getElementsByClassName('container');

    expect(fixed).toBeDefined();
    expect(containerComponent).toBeDefined();
  });
});
