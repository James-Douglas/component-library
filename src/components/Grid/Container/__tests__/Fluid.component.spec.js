import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import Fluid from '../Fluid.component';

describe('Container', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Fluid />);
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(
      <Fluid>
        <div className="child-content">test</div>
      </Fluid>,
    );

    const childContent = container.querySelector('.child-content');
    expect(container).toMatchSnapshot();
    expect(childContent).toBeInTheDocument();
  });

  it('has a container class by default and NO fixed class', () => {
    const { container } = render(<Fluid />);

    const containerComponent = container.firstChild;

    expect(container).toMatchSnapshot();
    expect(containerComponent).toBeDefined();
    expect(containerComponent).toHaveStyleRule('padding-left', '1.6rem');
    expect(containerComponent).not.toHaveStyleRule('max-width', '72rem');
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Fluid className="test-class" />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });
});
