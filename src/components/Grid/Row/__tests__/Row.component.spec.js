import React from 'react';
import { render } from '@testing-library/react';
import Row from '../Row.component';

const target = document.createElement('div');

describe('Row', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();
  });

  it('has a row class by default', () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();

    const row = container.getElementsByClassName('row');
    expect(row).toBeDefined();
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Row classes="test-class" />);

    expect(container).toMatchSnapshot();
    const test = target.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });
});
