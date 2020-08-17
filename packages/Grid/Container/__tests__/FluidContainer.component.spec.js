import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import FluidContainer from '../FluidContainer.component';

describe('Container', () => {
  it('renders correctly without props', () => {
    const { container } = render(<FluidContainer />);
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(
      <FluidContainer>
        <div className="child-content">test</div>
      </FluidContainer>,
    );

    const childContent = container.querySelector('.child-content');
    expect(container).toMatchSnapshot();
    expect(childContent).toBeInTheDocument();
  });

  it('has a container class by default and NO fixed class', () => {
    const { container } = render(<FluidContainer />);

    const containerComponent = container.firstChild;

    expect(container).toMatchSnapshot();
    expect(containerComponent).toBeDefined();
    expect(containerComponent).toHaveStyleRule('padding-left', '0');
    expect(containerComponent).not.toHaveStyleRule('max-width', '72rem');
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<FluidContainer className="test-class" />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('allows padding to be passed through', () => {
    const { container } = render(<FluidContainer className="test-class" padding={4} />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    const containerComponent = container.firstChild;

    expect(containerComponent).toHaveStyleRule('padding-left', '0.4rem');

    expect(test).toBeDefined();
  });
});
