import React from 'react';
import { render } from '@testing-library/react';
import Column from '../Column.component';


describe('Column', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Column />);
    expect(container).toMatchSnapshot();
  });

  it('adds "col" class by default if no props are supplied', () => {
    const { container } = render(<Column />);
    expect(container).toMatchSnapshot();

    const column = container.getElementsByClassName('col');

    expect(column).toBeDefined();
  });

  it('breakpoint column classes get applied as intended', () => {
    const { container } = render(<Column col={1} sm={1} md={1} lg={1} xl={1} xxl={1} offset={1} />);

    expect(container).toMatchSnapshot();

    const col = container.getElementsByClassName('col-1');
    const sm = container.getElementsByClassName('col-sm-1');
    const md = container.getElementsByClassName('col-md-1');
    const lg = container.getElementsByClassName('col-lg-1');
    const xl = container.getElementsByClassName('col-xl-1');
    const xxl = container.getElementsByClassName('col-xxl-1');
    const offset = container.getElementsByClassName('offset-1');

    expect(col).toBeDefined();
    expect(sm).toBeDefined();
    expect(md).toBeDefined();
    expect(lg).toBeDefined();
    expect(xl).toBeDefined();
    expect(xxl).toBeDefined();
    expect(offset).toBeDefined();
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Column className="test-class" />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });
});
