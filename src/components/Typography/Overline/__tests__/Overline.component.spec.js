import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import Overline from '../Overline.component';

describe('Overline.component', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Overline />);
    expect(container).toMatchSnapshot();
  });

  it('renders with its style', () => {
    const { getByText } = render(
      <Overline>
        Overline copy
      </Overline>,
    );
    expect(getByText('Overline copy')).toBeDefined();
    expect(getByText('Overline copy')).toHaveStyleRule(
      'line-height', '1.4',
      'font-size', '1rem',
      'letter-spacing', '0.15rem',
      'font-weight', '600',
      'text-transform', 'uppercase',
      'color', '#787673',
    );
  });
});
