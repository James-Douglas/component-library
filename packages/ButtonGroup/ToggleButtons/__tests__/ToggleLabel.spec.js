import React from 'react';
import { render } from '../../../../testUtils';
import ToggleLabel from '../ToggleLabel';

describe('ToggleLabel', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <ToggleLabel dirty={false} autofill={false} id="test">
        <div>child content</div>
      </ToggleLabel>,
    );
    expect(container).toMatchSnapshot();
  });
});
