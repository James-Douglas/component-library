import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import Container from '../Container.component';
import theme from '../../../Themes/ctm.theme';

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

    expect(containerComponent).toHaveStyleRule('padding-left', '0');
    expect(containerComponent).toHaveStyle(`max-width: ${theme.container.maxWidth}`);
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Container className="test-class" />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('allows padding to be passed through', () => {
    const { container } = render(<Container className="test-class" padding={4} />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    const containerComponent = container.firstChild;

    expect(containerComponent).toHaveStyleRule('padding-left', '0.4rem');

    expect(test).toBeDefined();
  });
});
