import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Container from '../Container.component';

describe('Container', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(
      <Container>
        <div className="child-content">test</div>
      </Container>,
    );

    const childContent = container.querySelector('.child-content');
    expect(container).toMatchSnapshot();
    expect(childContent).toBeInTheDocument();
  });

  it('has a container and fixed class by default', () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();

    const containerComponent = container.firstChild;

    expect(containerComponent).toHaveStyleRule('padding-left', '1.6rem');
    expect(containerComponent).toHaveStyleRule('max-width', '190rem');
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Container className="test-class" />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });
});
