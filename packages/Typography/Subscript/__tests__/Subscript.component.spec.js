import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import Subscript from '../Subscript.component';

describe('Subscript.component', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Subscript />);
    expect(container).toMatchSnapshot();
  });

  it('renders with its style', () => {
    const { getByText } = render(
      <Subscript>
        Subscript copy
      </Subscript>,
    );
    expect(getByText('Subscript copy')).toBeDefined();
    expect(getByText('Subscript copy')).toHaveStyleRule(
      'line-height', '1.4',
      'font-size', '1rem',
      'letter-spacing', '0.15rem',
      'font-weight', '400',
      'text-transform', 'uppercase',
      'color', '#333333',
    );
  });
});
