import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Row from '../Row.component';

describe('Row', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(
      <Row>
        <div className="child-content">test</div>
      </Row>,
    );

    const childContent = container.querySelector('.child-content');
    expect(childContent).toBeInTheDocument();
  });

  it('has a row class by default', () => {
    const { container } = render(<Row />);

    const row = container.querySelector('.row');
    expect(row).toBeDefined();
    expect(row).toHaveStyleRule('flex-wrap', 'wrap');
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Row className="test-class" />);

    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('reverses the flow of the children items', () => {
    const { container } = render(
      <Row className="test-class" reverse>
        <div>One</div>
        <div>two</div>
        <div>three</div>
      </Row>,
    );

    const row = container.querySelector('.test-class');
    expect(row).toHaveStyleRule('flex-direction', 'row-reverse');
  });
});
