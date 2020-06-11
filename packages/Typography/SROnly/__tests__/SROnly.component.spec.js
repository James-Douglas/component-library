import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import SROnly from '../SROnly.component';

describe('SROnly.component', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<SROnly />);
    expect(container).toMatchSnapshot();
  });

  it('renders with its style', () => {
    const { getByText } = render(
      <SROnly>
        SRonly
      </SROnly>,
    );
    expect(getByText('SRonly')).toBeDefined();
    expect(getByText('SRonly')).toHaveStyleRule(
      'position', 'absolute',
      'width', '1px',
      'height', '1px',
      'padding', '0',
      'margin', '-1px',
      'overflow', 'hidden',
      'clip', 'rect(0, 0, 0, 0)',
      'white-space', 'nowrap',
      'border-width', '0',
    );
  });
});
