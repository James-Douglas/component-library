import React from 'react';
import { render } from '../../../../testUtils';
import ScrollableButtons from '../ScrollableButtons.component';

describe('ScrollableButtons', () => {
  it('renders with props', () => {
    const buttons = [
      {
        id: 'id-1',
        label: 'label1',
        handleClick: () => {},
        href: '#',
      },
      {
        id: 'id-2',
        label: 'label2',
        handleClick: () => {},
        href: '#',
      },
    ];

    const { container } = render(
      <ScrollableButtons trackingLabel="test-scrollable-buttons" selectedId="test" buttons={buttons} />,
    );

    expect(container).toMatchSnapshot();
  });
});
