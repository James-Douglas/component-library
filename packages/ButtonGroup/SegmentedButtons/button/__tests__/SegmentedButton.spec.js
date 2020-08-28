import React from 'react';
import { render } from '../../../../../testUtils';
import SegmentedButton from '../SegmentedButton.component';

describe('SegmentedButton', () => {
  it('renders with props', () => {
    const { container } = render(
      <SegmentedButton id="test" value="test" title="hello" />,
    );
    expect(container.innerHTML).toBeDefined();
  });
});
