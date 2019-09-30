import React from 'react';
import { render } from '@testing-library/react';
import TrackerItem from '../TrackerItem.component';

describe('TrackerItem', () => {
  it('renders correctly', () => {
    const props = {
      index: 3,
      mobile: false,
      label: '66%',
      active: false,
      disabled: true,
    };
    const { container } = render(<TrackerItem index={props.index} mobile={props.mobile} label={props.label} active={props.active} disabled={props.disabled} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
