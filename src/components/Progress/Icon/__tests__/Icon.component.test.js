import React from 'react';
import { render } from '@testing-library/react';
import ProgressIcon from '../Icon.component';

describe('ProgressIcon', () => {
  it('renders correctly', () => {
    const props = {
      index: 3,
      active: false,
      disabled: false,
      mobile: false,
    };
    const { container } = render(<ProgressIcon index={props.index} active={props.active} disabled={props.disabled} mobile={props.mobile} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
