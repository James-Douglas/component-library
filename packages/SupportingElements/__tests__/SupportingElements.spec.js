import React from 'react';
import { render } from '../../../testUtils';
import SupportingElements from '../SupportingElements';

describe('SupportingElements', () => {
  it('does not render when disabled true', () => {
    const { container } = render(<div id="test"><SupportingElements label="test" required={false} disabled /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });
  it('does not render when required true, additionalContent not provided, disabled false', () => {
    const { container } = render(<div id="test"><SupportingElements label="test" required /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });
  it('renders when required false', () => {
    const { getByText, container } = render(<SupportingElements label="test" required={false} />);
    const srOnlyText = container.firstChild.firstChild.innerHTML;
    expect(srOnlyText).toEqual('The test field is optional');
    expect(getByText('Optional')).toBeInTheDocument();
  });
  it('renders with additionalContent', () => {
    const { getByText } = render(<SupportingElements label="test" required={false} additionalContent="additional content" />);
    expect(getByText('additional content')).toBeInTheDocument();
  });
});
