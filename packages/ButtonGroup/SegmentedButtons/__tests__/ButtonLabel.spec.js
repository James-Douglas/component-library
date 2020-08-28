import React from 'react';
import { render } from '../../../../testUtils';
import ButtonLabel from '../ButtonLabel';

describe('ButtonLanel', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <ButtonLabel dirty={false} autofill={false} id="test">
        <div>child content</div>
      </ButtonLabel>,
    );
    expect(container).toBeDefined();
  });
});
