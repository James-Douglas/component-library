import React from 'react';
import 'jest-styled-components';
import { Input } from '@comparethemarketau/manor-input';
import { render } from '../../../testUtils';
import GenericModal from '../GenericModal.component';

describe('GenericModal', () => {
  it('renders with minimal props', () => {
    const { baseElement } = render(<GenericModal id="test-modal" visible />);
    const modal = baseElement.querySelector('#test-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toMatchSnapshot();
  });

  it('does not render if visible={false}', () => {
    const { container } = render(<GenericModal id="test-modal" visible={false} />);
    const modal = container.querySelector('#test-modal');
    expect(modal).not.toBeInTheDocument();
  });

  it('renders children and renders other components', () => {
    const { baseElement } = render(
      <GenericModal id="test-modal" visible>
        <div id="test-content">
          <p>some test text</p>
        </div>
        <Input id="test-child-input" handleChange={() => {}} />
      </GenericModal>,
    );

    const modal = baseElement.querySelector('#test-modal');
    const testDiv = modal.querySelector('#test-content');
    const input = modal.querySelector('#test-child-input');

    expect(input).toBeInTheDocument();
    expect(testDiv).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
  });
});
