import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render } from '../../../testUtils';
import FieldValidation from '../FieldValidation.component';

describe('FieldValidation', () => {
  it('does not render when message is not provided', () => {
    const { container } = render(<div id="test"><FieldValidation /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });
  it('renders with validation message', () => {
    const { getByText } = render(<FieldValidation message="Test" />);
    const validation = getByText('Test').parentNode;
    expect(validation).toHaveStyle(`color: ${ctmTheme.colors.error500}`);
    expect(validation).toBeInTheDocument();
  });
});
