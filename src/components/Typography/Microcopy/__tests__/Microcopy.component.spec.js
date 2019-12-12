import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Microcopy from '../Microcopy.component';

describe('Microcopy.component', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Microcopy />);
    expect(container).toMatchSnapshot();
  });

  it('renders with its style', () => {
    const { getByText } = render(
      <Microcopy>
        micro copy
      </Microcopy>,
    );
    expect(getByText('micro copy')).toBeDefined();
    expect(getByText('micro copy')).toHaveStyleRule(
      'font-weight', '400',
      'font-size', '1.2rem',
      'line-height', '1.4',
    );
  });
});
